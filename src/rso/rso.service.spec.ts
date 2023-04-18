import { Test, TestingModule } from '@nestjs/testing';
import { RsoService } from './rso.service';

describe('RsoService', () => {
  let service: RsoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RsoService],
    }).compile();

    service = module.get<RsoService>(RsoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
