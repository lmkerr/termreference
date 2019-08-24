import { HttpService } from '@nestjs/common';
export declare class TermsService {
    private http;
    constructor(http: HttpService);
    getTerms(): import("../../../node_modules/rxjs/internal/Observable").Observable<any>;
    getTermById(termId: string): import("../../../node_modules/rxjs/internal/Observable").Observable<any>;
    createTerm(term: any): import("../../../node_modules/rxjs/internal/Observable").Observable<any>;
    updateTerm(term: any): import("../../../node_modules/rxjs/internal/Observable").Observable<any>;
}
