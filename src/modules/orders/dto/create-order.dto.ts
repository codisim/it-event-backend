import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderDto {
  
  @ApiProperty({
    description: 'Total amount of the order',
    example: 150.75
  })
  @IsNumber()
  totalAmount: number;

  @ApiProperty({
    description: 'User ID',
    example: 'uuid-user-id'
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'Event ID',
    example: 'uuid-event-id'
  })
  @IsString()
  eventId: string;
}