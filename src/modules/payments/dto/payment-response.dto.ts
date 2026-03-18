import { ApiProperty } from '@nestjs/swagger';
import { PaymentProvider, PaymentStatus } from '@prisma/client';

export class PaymentResponseDto {

  @ApiProperty({
    example: 'uuid-payment-id',
  })
  id: string;

  @ApiProperty({
    enum: PaymentProvider,
    example: PaymentProvider.STRIPE,
  })
  provider: PaymentProvider;

  @ApiProperty({
    example: 'txn_123456789',
    nullable: true,
  })
  transactionId?: string;

  @ApiProperty({
    enum: PaymentStatus,
    example: PaymentStatus.PENDING,
  })
  status: PaymentStatus;

  @ApiProperty({
    example: 'uuid-user-id',
  })
  userId: string;

  @ApiProperty({
    example: 'uuid-order-id',
  })
  orderId: string;

  @ApiProperty({
    example: '2026-03-18T10:00:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2026-03-18T10:10:00Z',
  })
  updatedAt: Date;
}


export class PaymentResponseApiDto {
  @ApiProperty({
    example: true
  })
  success: boolean;

  @ApiProperty({
    type: PaymentResponseDto
  })
  data: PaymentResponseDto

  @ApiProperty({
    example: 'Payment created successfully',
    required: false
  })
  message?: string
}