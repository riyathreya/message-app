import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

// Injectable interface registers service with DI container
@Injectable()
export class MessagesService {
  // messagesRepo: MessagesRepository;
  // constructor(messagesRepo: MessagesRepository) {
  //   this.messagesRepo = messagesRepo;
  // }
  // the below line is equivalent to above three lines
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    this.messagesRepo.create(content);
  }
}
