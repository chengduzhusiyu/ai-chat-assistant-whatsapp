import { IsString } from 'class-validator';

export class ReplyMessageDto {
  @IsString()
  readonly body: strin