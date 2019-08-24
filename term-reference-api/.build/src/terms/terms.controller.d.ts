import { Observable } from 'rxjs';
import { TermsService } from 'src/services/terms/terms.service';
export declare class TermsController {
    private _termsService;
    constructor(_termsService: TermsService);
    findAll(): Observable<any>;
}
