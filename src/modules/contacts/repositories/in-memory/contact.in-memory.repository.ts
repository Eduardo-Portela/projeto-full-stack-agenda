import { Injectable } from "@nestjs/common"
import { Contact } from './../../entitie/contact.entitie';
import { ContactsRepository } from "../contact.repository";
import { CreateContatctDTO } from "../../dto/create-contact.dto";
import { UpdateContactDto } from "../../dto/update-contact.dto";

@Injectable()

export class ContactsInMemoryRepository implements ContactsRepository{
    private database: Contact[] = []
    
    async create (data: CreateContatctDTO): Promise<Contact>{
        const newContact = new Contact()
        Object.assign(newContact, {
            ...data
        })
        this.database.push(newContact)

        return newContact
    }

    async findOne(id: string): Promise<Contact> {
        const contact = this.database.find(contact => contact.id === id)
        return contact
    }

    async findAll(): Promise<Contact[]> {
        return this.database
    }

    async update(id: string, data: UpdateContactDto): Promise<Contact>  {
        const contactIndex: number = this.database.findIndex(contact => contact.id === id)
        console.log(contactIndex)

        this.database[contactIndex] = {
            ...this.database[contactIndex],
            ...data
        }
        return this.database[contactIndex]
    }

    async delete(id: string): Promise<void> {
        const contactIndex: number = this.database.findIndex(contact => contact.id === id)

        this.database.splice(contactIndex, 1)
    }
}