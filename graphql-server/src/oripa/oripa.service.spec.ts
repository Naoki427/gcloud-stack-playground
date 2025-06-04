import { Test, TestingModule } from '@nestjs/testing';
import { OripaService } from './oripa.service';

describe('OripaService', () => {
  let service: OripaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OripaService],
    }).compile();

    service = module.get<OripaService>(OripaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
