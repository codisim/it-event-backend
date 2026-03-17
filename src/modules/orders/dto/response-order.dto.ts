import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from '@prisma/client';

export class OrderResponseDto {

  @ApiProperty({
    example: 'uuid-order-id'
  })
  id: string;

  @ApiProperty({
    example: 150.75
  })
  totalAmount: number;

  @ApiProperty({
    enum: OrderStatus,
    example: OrderStatus.PENDING
  })
  status: OrderStatus;

  @ApiProperty({
    example: 'uuid-user-id'
  })
  userId: string;

  @ApiProperty({
    example: 'uuid-event-id'
  })
  eventId: string;

  @ApiProperty({
    example: '2026-03-18T10:00:00Z'
  })
  createdAt: Date;

  @ApiProperty({
    example: '2026-03-18T10:10:00Z'
  })
  updatedAt: Date;
}