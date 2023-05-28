import { PartialType } from '@nestjs/mapped-types';
import { CreateContatctDTO } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContatctDTO) {}