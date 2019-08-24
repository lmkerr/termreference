/* Framework */
import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';

/* Internal */
import { TermsService } from 'src/services/terms/terms.service';

@Controller('terms')
export class TermsController {

    constructor(private _termsService: TermsService) {

    }

    @Get()
    findAll(): Observable<any> { 
        return this._termsService.getTerms();
    }

    @Get(':termId')
    find(@Param('termId') termId) {
        return {
            id: termId,
            text: 'this is a test'
        }
    }
}
