import { Injectable, OnModuleInit } from '@nestjs/common';
import {PrismaClient} from '@prisma/client'

@Injectable() //es un servicio inyectable para cualquier inyeccion en datos
export class PrismaService extends PrismaClient implements OnModuleInit{
    async onModuleInit() {
        await this.$connect();
    }
}