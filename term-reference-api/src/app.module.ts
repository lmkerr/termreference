import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TermsController } from './terms/terms.controller';

@Module({
  imports: [],
  controllers: [AppController, TermsController],
  providers: [AppService],
})
export class AppModule {}
