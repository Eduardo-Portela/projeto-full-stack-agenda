import { ApiProperty } from "@nestjs/swagger"
import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsString, IsNotEmpty, MinLength, IsEmail, IsDateString, IsDate, IsPhoneNumber, isNotEmpty } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    fullName: string

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string

    @IsPhoneNumber('BR')
    @ApiProperty()
    @IsNotEmpty()
    phone: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty()
    @Transform(({value}: {value: string}) => hashSync(value),{
        groups: ['transform'],
    })
    password: string
}
