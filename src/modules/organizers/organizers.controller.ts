import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { OrganizersService } from './organizers.service';
import { Roles } from 'src/common/decorators/role.decorators';
import { UserRole } from '@prisma/client';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateOrganizerDto } from './dto/create-organizer.dto';
import { OrganizerResponseDto } from './dto/organizer-response.dto';

@Controller('organizers')
export class OrganizersController {
    constructor(private readonly organizersService: OrganizersService) { }

    @Post('create')
    @Roles(UserRole.ADMIN)
    @HttpCode(201)
    @ApiOperation({ summary: 'Create a new organizer (admin only)', description: 'Create a new organizer with name, company name, contact info and user id' })
    @ApiResponse({
        status: 201,
        description: 'Organizer created successfully',
        type: OrganizerResponseDto
    })

    @ApiResponse({
        status: 400,
        description: 'Bad request',
    })

    @ApiResponse({
        status: 401,
        description: 'Unauthorized',
    })

    @ApiResponse({
        status: 500,
        description: 'Internal server error',
    })

    async createOrganizer(@Body() createOrganizerDto: CreateOrganizerDto): Promise<OrganizerResponseDto> {
        return this.organizersService.createOrganizer(createOrganizerDto);
    }
}
