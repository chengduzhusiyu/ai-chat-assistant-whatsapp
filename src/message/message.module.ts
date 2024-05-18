import { Module } from '@nestjs/common';
import { OpenAiService } from './open-ai/open-ai.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CustomerService } from './customer/customer.s