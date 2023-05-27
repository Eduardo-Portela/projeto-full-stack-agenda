import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateContatctDTO {

    @IsString()
    @IsNotEmpty()
    fullName: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    phone: string

    @IsString()
    @IsNotEmpty()
    user_id?: string
}