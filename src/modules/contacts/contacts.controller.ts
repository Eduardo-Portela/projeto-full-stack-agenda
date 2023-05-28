import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContatctDTO } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createContactDto: CreateContatctDTO, @Request() req){
    return this.contactsService.create(createContactDto, req.user.id)
  }

  @Get()
  findAll() {
    return this.contactsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id:string){
    return this.contactsService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto){
    return this.contactsService.update(id, updateContactDto)
  }

  @Delete(':id')
  delete(@Param('id') id: string){
    return this.contactsService.delete(id)
  }

}
