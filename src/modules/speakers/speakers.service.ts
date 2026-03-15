import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpeakersService {
    constructor(private readonly prisma: PrismaService) { }

    // create a speaker
    async CreateSpeakerDto(createSpeakerDto: any) {
        const { name, bio, eventId } = createSpeakerDto;
        return this.prisma.speaker.create({
            data: {
                name,
                bio,
                photo: createSpeakerDto.photo || null,
            },
        });
    }

    // get all speakers
    async getAllSpeakers() {
        return this.prisma.speaker.findMany();
    }
}
