import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import Stripe from 'stripe';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentStatus } from '@prisma/client';

@Injectable()
export class PaymentsService {
    private stripe: Stripe;

    constructor(private prisma: PrismaService) {
        this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
            apiVersion: '2026-02-25.clover'
        })
    }

    // create payment intent
    async createPaymentIntent(createPaymentDto: CreatePaymentDto, userId: string): Promise<{
        susssess: boolean;
        data: {
            clientSecret: string;
            paymentId: string;
        };
        message: string;
    }> {
        const { orderId, provider = 'STRIPE', transactionId } = createPaymentDto;

        const order = await this.prisma.order.findUnique({
            where: {
                id: orderId,
                userId
            }
        });

        if (!order)
            throw new NotFoundException(`Order not found in ${userId} account`);


        const exixtingPayment = await this.prisma.payment.findFirst({
            where: {
                orderId
            }
        });

        if (exixtingPayment && exixtingPayment.status === PaymentStatus.SUCCESS)
            throw new BadRequestException('Payment already completed for this order')


        const paymentIntent = await this.stripe.paymentIntents.create({
            amount: order.totalAmount * 100,
            currency: 'usd',
            payment_method_types: ['card'],
            metadata: {
                orderId,
                userId
            }
        })


        const payment = await this.prisma.payment.create({
            data: {
                orderId,
                userId,
                status: PaymentStatus.PENDING,
                provider,
                transactionId: paymentIntent.id
            }
        })

        return {
            susssess: true,
            data: {
                clientSecret: paymentIntent.client_secret!,
                paymentId: payment.id
            },
            message: 'Payment intent created successfully'
        }

    }


}
