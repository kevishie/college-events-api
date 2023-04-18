import { Test, TestingModule } from '@nestjs/testing';
import { RsoController } from './rso.controller';

describe('RsoController', () => {
  let controller: RsoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RsoController],
    }).compile();

    controller = module.get<RsoController>(RsoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
