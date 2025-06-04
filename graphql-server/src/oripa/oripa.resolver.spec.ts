import { Test, TestingModule } from '@nestjs/testing';
import { OripaResolver } from './oripa.resolver';

describe('OripaResolver', () => {
  let resolver: OripaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OripaResolver],
    }).compile();

    resolver = module.get<OripaResolver>(OripaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
