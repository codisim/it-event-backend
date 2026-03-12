import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VenuesService {
    constructor(private prisma: PrismaService) { }

    // create a venue
    async createVenue(createVenueDto: any) {
        const { name, address, mapLink } = createVenueDto;

        try {
            const venue = await this.prisma.venue.create({
                data: {
                    name,
                    address,
                    mapLink
                },
                select: {
                    id: true,
                    name: true,
                    address: true,
                    mapLink: true,
                    createdAt: true,
                    updatedAt: true
                }
            });
            return venue;
        } catch (error) {
            console.error('Error creating venue:', error);
            throw new InternalServerErrorException('Failed to create venue');
        }
    }

    // get all venues
    async getAllVenues() {
        try {
            const venues = await this.prisma.venue.findMany({
                select: {
                    id: true,
                    name: true,
                    address: true,
                    mapLink: true,
                    createdAt: true,
                    updatedAt: true
                }
            });
            return venues;
        } catch (error) {
            console.error('Error fetching venues:', error);
            throw new InternalServerErrorException('Failed to fetch venues');
        }
    }

}
