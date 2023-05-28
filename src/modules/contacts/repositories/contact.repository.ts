import { CreateContatctDTO } from "../dto/create-contact.dto";
import { UpdateContactDto } from "../dto/update-contact.dto";
import { Contact } from "../entitie/contact.entitie";


export abstract class ContactsRepository{
    abstract create(data: CreateContatctDTO, user_Id: string): Promise<Contact>
    abstract findOne(id: string): Promise<Contact | undefined > 
    abstract findByIdAndEmail(id:string, email: string): Promise<Contact>
    abstract findAll(): Promise<Contact[]>
    abstract update(id: string, data: UpdateContactDto):  Promise<Contact> | Contact
    abstract delete(id: string): Promise<void>
}