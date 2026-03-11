import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrganizerDto } from './dto/create-organizer.dto';
import { OrganizerResponseDto } from './dto/organizer-response.dto';

@Injectable()
export class OrganizersService {
    constructor(private prisma: PrismaService) { }

    async createOrganizer(createOrganizerDto: CreateOrganizerDto, userId: string): Promise<OrganizerResponseDto> {
        const { name, companyName, contactInfo } = createOrganizerDto;

        try {
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
        } catch (error) {
            console.error('Error creating organizer:', error);
            throw new InternalServerErrorException('Failed to create organizer');
        }

    }
}
