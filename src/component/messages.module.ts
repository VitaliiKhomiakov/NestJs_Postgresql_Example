import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesService } from '../services/messages.service';
import { MessagesEntity } from '../entity/messages.entity';
import { MessagesController } from './messages.controller';


@Module({
  imports: [TypeOrmModule.forFeature([
    MessagesEntity
  ])],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
