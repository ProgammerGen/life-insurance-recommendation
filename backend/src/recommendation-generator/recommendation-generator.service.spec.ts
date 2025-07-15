import { Test, TestingModule } from '@nestjs/testing';
import { RecommendationGeneratorService } from './recommendation-generator.service';

describe('RecommendationGeneratorService', () => {
  let service: RecommendationGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecommendationGeneratorService],
    }).compile();

    service = module.get<RecommendationGeneratorService>(
      RecommendationGeneratorService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
