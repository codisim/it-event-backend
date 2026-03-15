import { PartialType } from "@nestjs/swagger";
import { CreateSessionDto } from "src/modules/sessions/dto/create-sesion.dto";

export class UpdateSessionDto extends PartialType(CreateSessionDto) { }