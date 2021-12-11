import { Controller, Get } from '@nestjs/common';
import {MessagesService} from "../services/messages.service";

@Controller()
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get('test')
  async test(): Promise<string> {
    await this.messagesService.save();
    const lastData = await this.messagesService.findAll();
    return ' test' + JSON.stringify(lastData);
  }
}
