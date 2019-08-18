import { Controller, Get } from '@nestjs/common';
import { Term } from '../models/term';
 
@Controller('term')
export class TermController {
 
   @Get()
   languages(): Term[] {
       return [new Term("typescript"), new Term("java")];
   }
}
