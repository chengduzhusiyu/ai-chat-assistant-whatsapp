import { Injectable } from '@nestjs/common';
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai';
@Injectable()
export class OpenAiService {
  private configuration: Configuration;
  private openAI: OpenAIApi;

  constructor() {
    this.configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openAI = new Ope