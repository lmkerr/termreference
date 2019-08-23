import { Test, TestingModule } from '@nestjs/testing';
import { TermsController } from './terms.controller';

describe('Terms Controller', () => {
  let controller: TermsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TermsController],
    }).compile();

    controller = module.get<TermsController>(TermsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
