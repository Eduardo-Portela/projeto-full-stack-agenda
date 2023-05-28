import { Injectable } from "@nestjs/common"
import { ContactsRepository } from "../contact.repository";
import { CreateContatctDTO } from "../../dto/create-contact.dto";
import { UpdateContactDto } from "../../dto/update-contact.dto";
import { Contact } from "../../entitie/contact.entitie";
import { PrismaService } from "src/modules/database/prisma.service";
import { Prisma, User } from "@prisma/client";



@Injectable()
export class ContactsPrismaRepository implements ContactsRepository{
    constructor(private prisma: PrismaService){}

    async create(data: CreateContatctDTO, user_Id: string): Promise<Contact> {
        const contact: Contact = new Contact()
        Object.assign(contact, {
            ...data
        })

        const newContact: Contact = await this.prisma.contact.create({
            data: {
                id: contact.id,
                email: contact.email,
                fullName: contact.fullName,
                phone: contact.phone,
                user_Id
            }
        })
        return newContact
    }
    async findOne(id: string): Promise<Contact> {
        const contact: Contact = await this.prisma.contact.findUnique({
            where: {id}
        })
        return contact
    }

    async findByIdAndEmail(id: string, email: string): Promise<Contact> {
        const contact: Contact = await this.prisma.contact.findFirst({
            where: {
                user_Id: id,
                email: email
            }
        })
        return contact
    } 

    async findAll(): Promise<Contact[]> {
        const contacts: Contact[] = await this.prisma.contact.findMany()

        return contacts
    }
    async update(id: string, data: UpdateContactDto): Promise<Contact> {
        const updatedContact: Prisma.Prisma__ContactClient<Contact, never> = this.prisma.contact.update({
            where: {id},
            data: {...data}
        })

        return updatedContact
    }
    async delete(id: string): Promise<void> {
        await this.prisma.contact.delete({
            where: {id}
        })
    }
    
}