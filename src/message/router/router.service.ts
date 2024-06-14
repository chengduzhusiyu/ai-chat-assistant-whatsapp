/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@nestjs/common';
import { MessageService } from '../message.service';
import { Client, LocalAuth, MessageMedia } from 'whatsapp-web.js';
import * as qrcode from 'qrcode';
import { ReplyMessageDto } from '../dto/reply-message.dto';
import { getCannotGenerateImageError } from '../helpers/error-messages';

@Injectable()
export class RouterService {
  client: Client;
  commands: Map<string, Function>;

  constructor(private readonly messageService: MessageService) {
    this.client = new Client({
      authStrategy: new LocalAuth({ clientId: 'zara-bot' }),
      puppeteer: {
        headless: true,
        args: ['--no-sandbox'],
      },
    });

    this.commands = new Map<string, Function>();
    this.commands.set('/imagine', this.handleImagineCommand.bind(this));
    this.commands.set('/clear', this.handleClearCommand.bind(this