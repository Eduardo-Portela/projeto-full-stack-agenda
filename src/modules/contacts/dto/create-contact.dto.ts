import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateContatctDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    fullName: string

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    phone: string
}