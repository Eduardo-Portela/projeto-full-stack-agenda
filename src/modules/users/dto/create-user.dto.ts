import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsString, IsNotEmpty, MinLength, IsEmail, IsDateString, IsDate, IsPhoneNumber } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    fullName: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsPhoneNumber('BR')
    phone: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @Transform(({value}: {value: string}) => hashSync(value),{
        groups: ['transform'],
    })
    password: string
}
