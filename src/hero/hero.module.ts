import { Module } from "@nestjs/common";
import { HeroController } from "./hero.controller";
import { HeroService } from "./hero.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[HeroController],
    providers:[HeroService],
    imports:[PrismaModule]
})

export class HeroModule{

}