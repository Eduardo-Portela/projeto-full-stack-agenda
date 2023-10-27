import { Exclude } from "class-transformer"
import { randomUUID } from "crypto"

export class User {
    readonly id: string
    fullName: string
    email: string
    phone: string

    @Exclude()
    password: string

    readonly createdAt: Date

    constructor(){
        this.id = randomUUID();
    }
}
