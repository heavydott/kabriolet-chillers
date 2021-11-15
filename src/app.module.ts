import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ChillerModule} from "./chiller/chiller.module";

@Module({
  imports: [ChillerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
