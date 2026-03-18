import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsEnum, IsOptional, IsString } from 'class-validator';
import { PaymentProvider } from '@prisma/client';

export class CreatePaymentDto {

  @ApiProperty({
    description: 'Payment provider (e.g., STRIPE, SSLCOMMERZ)',
    enum: PaymentProvider,
    example: PaymentProvider.STRIPE,
  })
  @IsEnum(PaymentProvider)
  provider: PaymentProvider;

  @ApiPropertyOptional({
    description: 'Transaction ID from payment gateway',
    example: 'txn_123456789',
  })
  @IsOptional()
  @IsString()
  transactionId?: string;

  // @ApiProperty({
  //   description: 'User ID',
  //   example: 'uuid-user-id',
  // })
  // @IsString()
  // userId: string;

  @ApiProperty({
    description: 'Order ID (must be unique)',
    example: 'uuid-order-id',
  })
  @IsString()
  orderId: string;
}
