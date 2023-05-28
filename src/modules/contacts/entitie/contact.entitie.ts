import { randomUUID } from "crypto"

export class Contact{
    readonly id: string
    fullName: string
    email: string
    phone: string
    createdAt: Date
    user_id?: string

    constructor(){
        this.id = randomUUID()
    }
}