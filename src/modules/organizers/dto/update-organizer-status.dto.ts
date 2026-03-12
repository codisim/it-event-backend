import { ApiProperty } from "@nestjs/swagger";
import { OrganizerStatus } from "@prisma/client";

export class UpdateOrganizerStatusDto {

    @ApiProperty({
        enum: OrganizerStatus,
        example: OrganizerStatus.APPROVED,
        description: 'Organizer approval status'
    })
    status: OrganizerStatus;

}