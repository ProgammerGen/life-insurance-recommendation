import { Injectable } from '@nestjs/common';
import {
  GenerateRecommendationDto,
  GeneratedRecommendation,
} from './dto/generate-recommendation.dto';
@Injectable()
export class RecommendationGeneratorService {
  async generateRecommendation(
    dto: GenerateRecommendationDto,
  ): Promise<GeneratedRecommendation> {
    const { age, income, dependents, risk } = dto;

    let result: GeneratedRecommendation;
    if (age < 40 && risk === 'High' && income > 100000 && dependents >= 2) {
      result = {
        plan: 'Term Life – $2,000,000 for 30 years',
        explanation:
          'You are young, have a high income, multiple dependents, and a high risk tolerance. A high coverage, long-term policy is recommended.',
      };
    } else if (age < 40 && risk === 'High') {
      result = {
        plan: 'Term Life – $1,000,000 for 20 years',
        explanation:
          'You are young and have a high risk tolerance, so a high coverage term policy is suggested.',
      };
    } else if (risk === 'Low' && dependents === 0) {
      result = {
        plan: 'Whole Life – $100,000 for lifetime',
        explanation:
          'With no dependents and a low risk tolerance, a modest whole life policy is recommended.',
      };
    } else if (risk === 'Low') {
      result = {
        plan: 'Whole Life – $250,000 for lifetime',
        explanation:
          'You prefer stability and lifelong coverage, so a whole life policy is recommended.',
      };
    } else if (risk === 'Medium' && income > 75000 && dependents > 0) {
      result = {
        plan: 'Term Life – $750,000 for 20 years',
        explanation:
          'A balanced approach: term life offers high coverage for a set period at a reasonable cost, suitable for your income and dependents.',
      };
    } else if (risk === 'Medium') {
      result = {
        plan: 'Term Life – $500,000 for 20 years',
        explanation:
          'A balanced approach: term life offers high coverage for a set period at a reasonable cost.',
      };
    } else if (dependents > 2 && income > 50000) {
      result = {
        plan: 'Term Life – $500,000 for 15 years',
        explanation:
          'With multiple dependents and moderate income, a mid-level term policy is suggested.',
      };
    } else {
      result = {
        plan: 'Term Life – $250,000 for 10 years',
        explanation: 'A basic term policy is suggested based on your profile.',
      };
    }
    return Promise.resolve(result);
  }
}
