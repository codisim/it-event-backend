import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { TicketTypeService } from './ticket-type.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RoleGuard } from 'src/common/guards/roles.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/role.decorators';
import { UserRole } from '@prisma/client';
import { TicketTypeResponseDto } from './dto/response-ticket-type.dto';
import { CreateTicketTypeDto } from './dto/create-ticket-type.dto';
import { UpdateTicketTypeResponseDto } from './dto/update-ticket-type.dto';

@Controller('ticket-type')
export class TicketTypeController {
  constructor(private readonly ticketTypeService: TicketTypeService) { }

  // create
  @Post()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.ORGANIZER)
  @ApiBearerAuth('JWT-auth')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create ticket type' })

  @ApiResponse({
    status: 201,
    description: 'The ticket type has been successfully created.',
    type: TicketTypeResponseDto
  })

  @ApiResponse({
    status: 400,
    description: 'Bad request'
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error'
  })


  async createTicketType(
    @Body() dto: CreateTicketTypeDto,
  ): Promise<TicketTypeResponseDto> {
    return this.ticketTypeService.createTicketType(dto);
  }

  // get all
  @Get()
  @ApiOperation({ summary: 'Get all ticket types' })
  @ApiResponse({ status: 200, type: [TicketTypeResponseDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error'
  })

  async getAll(): Promise<TicketTypeResponseDto[]> {
    return this.ticketTypeService.getAll();
  }

  // get by event ID
  @Get('event/:eventId')
  @ApiOperation({ summary: 'Get ticket types by event' })
  async getByEvent(
    @Param('eventId') eventId: string,
  ): Promise<TicketTypeResponseDto[]> {
    return this.ticketTypeService.getByEvent(eventId);
  }

  // get one
  @Get(':id')
  @ApiOperation({ summary: 'Get ticket type by id' })
  async getOne(@Param('id') id: string): Promise<TicketTypeResponseDto> {
    return this.ticketTypeService.getOne(id);
  }

  // update
  @Patch(':id')
   @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.ORGANIZER)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Update ticket type' })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateTicketTypeResponseDto,
  ): Promise<TicketTypeResponseDto> {
    return this.ticketTypeService.update(id, dto);
  }

  // delete
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth('JWT-auth')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete ticket type' })
  async delete(@Param('id') id: string): Promise<{message: string}> {
    return this.ticketTypeService.delete(id);
  }
}
