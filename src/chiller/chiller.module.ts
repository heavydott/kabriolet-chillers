import { Module } from '@nestjs/common';
import { ChillerController } from './chiller.controller';
import { ChillerService } from './chiller.service';

@Module({
    imports: [],
    controllers: [ChillerController],
    providers: [ChillerService],
})
export class ChillerModule {}
