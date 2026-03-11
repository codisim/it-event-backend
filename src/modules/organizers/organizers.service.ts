import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrganizerDto } from './dto/create-organizer.dto';
import { OrganizerResponseDto } from './dto/organizer-response.dto';

@Injectable()
export class OrganizersService {
    constructor(private prisma: PrismaService) { }

    async createOrganizer(createOrganizerDto: CreateOrganizerDto): Promise<OrganizerResponseDto> {
        const { name, companyName, contactInfo, userId } = createOrganizerDto;

        const organizer = await this.prisma.organizer.create({
            data: {
                name,
                companyName,
                contactInfo,
                userId
            },
            select: {
                id: true,
                name: true,
                companyName: true,
                contactInfo: true,
                verified: true,
                createdAt: true,
                userId: true
            }
        })

        return organizer;
    }
}
