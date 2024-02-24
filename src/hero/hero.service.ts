import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {hero} from "@prisma/client"
//metodos para comunicarce con la base de datos

@Injectable()
export class HeroService {

    constructor(private prisma: PrismaService){}

    async getAllHeros():Promise<hero[]>{
       return await this.prisma.hero.findMany();
    }

    async getHeroById(id:number):Promise<hero>{
        return await this.prisma.hero.findUnique({
            where:{
                id
              
            }
        });
     }

     async createHero(data:hero):Promise<hero>{
        return await this.prisma.hero.create({
            data
        }
        );
     }

     async updateHero(id:number, data:hero ):Promise<hero>{
        return await this.prisma.hero.update({
            where:{
                id
            },
            data
        });
     }

     async deleteHero(id:number):Promise<hero>{
        return await this.prisma.hero.delete({
            where:{
                id
            }
        }
        );
     }


}