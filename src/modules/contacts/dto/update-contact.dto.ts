import { PartialType } from '@nestjs/swagger';
import { CreateContatctDTO } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContatctDTO) {}