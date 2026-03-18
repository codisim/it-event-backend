import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentResponseApiDto } from './dto/payment-response.dto';
import { GetUser } from 'src/common/decorators/get-user.decorator';

@Controller('payments')
@UseGuards(JwtAuthGuard)
@ApiTags('payments')
@ApiBearerAuth()

export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) { }


    // create 
    @Post('payment-intent')
    @ApiOperation({
        summary: 'create payment intent',
        description: 'create payment intent for an order'
    })

    @ApiCreatedResponse({
        description: 'payment intent created successfully',
        type: PaymentResponseApiDto
    })

    @ApiBadRequestResponse({
        description: 'bad request',
    })


    async createPaymentIntent(@Body() createPaymentDto: CreatePaymentDto, @GetUser('id') userId: string) {
        return await this.paymentsService.createPaymentIntent(createPaymentDto, userId)
    }

}
