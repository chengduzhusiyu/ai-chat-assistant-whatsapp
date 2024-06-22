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
    this.commands.set('/clear', this.handleClearCommand.bind(this));
    this.commands.set('contribuir', this.handleDonateCommand.bind(this));
    this.commands.set('/doar', this.handleDonateCommand.bind(this));
    this.commands.set('/donate', this.handleDonateCommand.bind(this));
    this.commands.set('doar', this.handleDonateCommand.bind(this));
    this.commands.set('/help', this.handleHelpCommand.bind(this));
    this.commands.set('ajuda', this.handleHelpCommand.bind(this));
    this.commands.set('/suporte', this.handleSuporterHelperCommand.bind(this));
  }

  initialize(): void {
    this.client.on('qr', (qr) => {
      console.log('QR Generated');
      qrcode.toString(
        qr,
        { type: 'terminal', small: true },
        function (err, url) {
          if (err) throw err;
          console.log(url);
        },
      );
    });

    this.client.on('ready', () => {
      console.log('Server is running