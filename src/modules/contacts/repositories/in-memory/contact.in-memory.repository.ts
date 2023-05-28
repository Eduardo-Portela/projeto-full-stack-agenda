import { Injectable } from "@nestjs/common"
import { Contact } from './../../entitie/contact.entitie';
import { ContactsRepository } from "../contact.repository";
import { CreateContatctDTO } from "../../dto/create-contact.dto";
import { UpdateContactDto } from "../../dto/update-contact.dto";
import { User } from "@prisma/client";

@Injectable()

export class ContactsInMemoryRepository implements ContactsRepository{
    private database: Contact[] = []
    
    async create (data: CreateContatctDTO, user_Id: string): Promise<Contact>{
        const newContact = new Contact()
        Object.assign(newContact, {
            ...data,
            user_Id: user_Id
        })
        this.database.push(newContact)

        return newContact
    }

    async findOne(id: string): Promise<Contact> {
        const contact = this.database.find(contact => contact.id === id)
        return contact
    }

    async findByIdAndEmail(user_Id: string, email: string): Promise<Contact> {
        const contact: Contact = this.database.find(cont => cont.user_id == user_Id && cont.email == email)
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