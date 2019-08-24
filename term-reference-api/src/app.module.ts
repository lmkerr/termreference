/* Framework */
import { Module, HttpService, HttpModule } from '@nestjs/common';

/* Internal */
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TermsController } from './terms/terms.controller';
import { TermsService } from './services/terms/terms.service';

@Module({
  imports: [HttpModule],
  controllers: [
    AppController, 
    TermsController
  ],
  providers: [
    AppService,
    TermsService
  ],
})
export class AppModule { }
