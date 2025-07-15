import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecommendationsService } from './recommendations.service';
import { RecommendationsController } from './recommendations.controller';
import { RecommendationGeneratorModule } from '../recommendation-generator/recommendation-generator.module';
import { Recommendation } from './entities/recommendation.entity';

@Module({
  imports: [
    RecommendationGeneratorModule,
    TypeOrmModule.forFeature([Recommendation]),
  ],
  controllers: [RecommendationsController],
  providers: [RecommendationsService],
})
export class RecommendationsModule {}
