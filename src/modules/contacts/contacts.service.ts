import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContatctDTO } from './dto/create-contact.dto';
import { ContactsRepository } from './repositories/contact.repository';
import { Contact } from './entitie/contact.entitie';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ContactsService {
    constructor(private ContactsRepository: ContactsRepository){}
    
    async create(createContatctDTO: CreateContatctDTO){
        const contact: Contact = await this.ContactsRepository.create(createContatctDTO)
        return contact
    }

    async findOne(id:string){
        const contact: Contact = await this.ContactsRepository.findOne(id)
        if(!contact){
            throw new NotFoundException("Contact not found!")
        }
        return contact
    }

    async findAll() {
        return await this.ContactsRepository.findAll()
    }


    async update(id: string, data: UpdateContactDto) {
        const contact: Contact = await this.ContactsRepository.findOne(id)
        if(!contact){
            throw new NotFoundException("Contact not found!")
        }

        return this.ContactsRepository.update(id, data)
    }

    async delete(id: string) {
        const contact: Contact = await this.ContactsRepository.findOne(id)
        if(!contact){
            throw new NotFoundException("Contact not found!")
        }
        
        await this.ContactsRepository.delete(id)
    }
}
