import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TermController } from './term/term.controller';

@Module({
  imports: [],
  controllers: [AppController, TermController],
  providers: [AppService],
})
export class AppModule {}
