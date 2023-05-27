import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto)
  }

  findAll() {
    return this.usersRepository.findAll()
  }

  findOne(id: string) {
    const findUser = this.usersRepository.findOne(id)
    if(!findUser){
      throw new NotFoundException("User not found!")
    }
    return findUser
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = this.usersRepository.findOne(id)
    if(!findUser){
      throw new NotFoundException("User not found!")
    }
    return this.usersRepository.update(id, updateUserDto)
  }

  remove(id: string) {
    const findUser = this.usersRepository.findOne(id)
    if(!findUser){
      throw new NotFoundException("User not found!")
    }
    return this.usersRepository.delete(id)
  }
}
