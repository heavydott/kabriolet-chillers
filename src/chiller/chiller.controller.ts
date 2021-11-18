import {Controller, Get, Param, Post, Query, Req} from '@nestjs/common';
import { ChillerService } from './chiller.service';

@Controller('chillers')
export class ChillerController {
    constructor(private readonly chillerService: ChillerService) {}

    @Get()
    getChillers() {
        return this.chillerService.getChillers();
    }

    @Get(':id')
    getChiller(@Param() params) {
        return this.chillerService.getChiller(params.id);
    }

    @Post()
    getChillersCalculate(@Req() req) {
        return this.chillerService.getChillersCalculate(req.body);
    }
}
