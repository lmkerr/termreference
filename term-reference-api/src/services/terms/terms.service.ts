import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class TermsService {

    constructor(private http: HttpService){

    }

    public getTerms() {
        return this.http.get('https://w6nv2ztq0k.execute-api.us-east-1.amazonaws.com/dev/terms/')
            .pipe(
                map(response => response.data)
            );
    }

    public getTermById(termId: string) {
        return this.http.get('https://w6nv2ztq0k.execute-api.us-east-1.amazonaws.com/dev/terms/' + termId)
            .pipe(
                map(response => response.data)
            );
    } 

    public createTerm(term: any) {
        return this.http.post('https://w6nv2ztq0k.execute-api.us-east-1.amazonaws.com/dev/terms/', term)
            .pipe(
                map(response => response.data)
            );
    }

    public updateTerm(term: any) {
        return this.http.patch('https://w6nv2ztq0k.execute-api.us-east-1.amazonaws.com/dev/terms/', term)
            .pipe(
                map(response => response.data)
            );
    }

}
