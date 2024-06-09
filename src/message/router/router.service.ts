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

  constructor(private readonly messageService: Me