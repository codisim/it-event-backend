import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpeakersService {
    constructor(private readonly prisma: PrismaService) { }

    // create a speaker
    async CreateSpeakerDto(createSpeakerDto: any) {
        const { name, bio, eventId } = createSpeakerDto;
        try {
            const speaker = await this.prisma.speaker.create({
                data: {
                    name,
                    bio,
                    photo: createSpeakerDto.photo || null,
                },
                select: {
                    id: true,
                    name: true,
                    bio: true,
                    photo: true,
                    createdAt: true,
                    updatedAt: true
                }
            });
            return speaker;
        } catch (error) {
            console.error('Error creating speaker:', error);
            throw new InternalServerErrorException('Failed to create speaker');
        }
    }

    // get all speakers
    async getAllSpeakers() {
        try {
            const speakers = await this.prisma.speaker.findMany();
            return speakers;
        } catch (error) {
            console.error('Error fetching speakers:', error);
            throw new InternalServerErrorException('Failed to fetch speakers');
        }
    }
}
