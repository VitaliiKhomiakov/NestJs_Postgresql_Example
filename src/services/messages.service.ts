import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessagesEntity } from '../entity/messages.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessagesEntity)
    private messagesRepository: Repository<MessagesEntity>,
  ) {}

  save(): Promise<MessagesEntity> {
    return this.messagesRepository.save({ text: 'Test' });
  }

  findAll(): Promise<MessagesEntity[]> {
    return this.messagesRepository.find();
  }

  findOne(id: string): Promise<MessagesEntity> {
    return this.messagesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.messagesRepository.delete(id);
  }
}
