import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { RecommendationGeneratorService } from '../recommendation-generator/recommendation-generator.service';
import { Recommendation } from './entities/recommendation.entity';

@Injectable()
export class RecommendationsService {
  constructor(
    @InjectRepository(Recommendation)
    private readonly recommendationRepo: Repository<Recommendation>,
    private readonly generator: RecommendationGeneratorService,
  ) {}

  async create(createRecommendationDto: CreateRecommendationDto) {
    const result = await this.generator.generateRecommendation(
      createRecommendationDto,
    );
    const recommendation = this.recommendationRepo.create({
      ...createRecommendationDto,
      ...result,
    });
    await this.recommendationRepo.save(recommendation);
    return recommendation;
  }
}
