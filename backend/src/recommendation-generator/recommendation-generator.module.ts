import { Module } from '@nestjs/common';
import { RecommendationGeneratorService } from './recommendation-generator.service';

@Module({
  providers: [RecommendationGeneratorService],
  exports: [RecommendationGeneratorService],
})
export class RecommendationGeneratorModule {}
