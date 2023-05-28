import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { ContactsRepository } from './repositories/contact.repository';
import { ContactsInMemoryRepository } from './repositories/in-memory/contact.in-memory.repository';
import { PrismaService } from '../database/prisma.service';
import { ContactsPrismaRepository } from './repositories/prisma/contacts-prisma.repository,';

@Module({
  controllers: [ContactsController],
  providers: [
    ContactsService,
    PrismaService,
    {
      provide: ContactsRepository,
      useClass: ContactsPrismaRepository
    }
  ]
})
export class ContactsModule {}
