import { Controller, Get, Post, Put, Delete, Body, Param, BadGatewayException, BadRequestException, UploadedFile, UseInterceptors, ParseFilePipe } from "@nestjs/common";
import { HeroService } from "./hero.service";
import { hero } from "@prisma/client"
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { fileFilter, renameImage } from "src/helpers/rename.helpers";

//GET localhost:3000/hero 

@Controller('heroes')
export class HeroController {

    constructor(private readonly heroService: HeroService) { }

    @Get()
    async getAllHeros() {
        return this.heroService.getAllHeros()
    }

    @Post()
    async createHero(@Body() data: hero) {
        return this.heroService.createHero(data)
    }

    @Get(':id')
    async getHeroById(@Param('id') id: string) {
        const herofound = await this.heroService.getHeroById(Number(id))//me convierte cualquier valor a number

        if (!herofound) throw new BadRequestException('El heroe no existe')

        return herofound;

    }

    @Delete(':id')
    async deleteHero(@Param('id') id: string) {

        try {
            return await this.heroService.deleteHero(Number(id))//me convierte cualquier valor a number

        } catch (error) {
            throw new BadRequestException('El heroe no existe')
        }
    }

    @Put(':id')
    async updateHero(@Param('id') id: string, @Body() data: hero) {
        try {
            return this.heroService.updateHero(Number(id), data)

        } catch (error) {
            throw new BadRequestException('El heroe no existe')

        }
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file',{
        storage:diskStorage({
            destination:'./upload',
            filename:renameImage
        }),
        fileFilter:fileFilter
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      console.log(file);
    }




} 