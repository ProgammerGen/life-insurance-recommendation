import { CreateRecommendationDto } from 'src/recommendations/dto/create-recommendation.dto';

export class GenerateRecommendationDto extends CreateRecommendationDto {}

export class GeneratedRecommendation {
  plan: string;
  explanation: string;
}
