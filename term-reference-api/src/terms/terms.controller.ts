import { Controller, Get } from '@nestjs/common';

@Controller('terms')
export class TermsController {
    @Get()
    findAll(): string[] { 
        return ['term 1', 'term2', 'term3']
    }
}
