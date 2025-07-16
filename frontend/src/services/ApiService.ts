import axios from 'axios';
import { RecommendationRequest, RecommendationResponse } from '@/types/lifeInsurance';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-App-Client': 'life-insurance-demo',
  },
});

export const ApiService = {
  getRecommendation: async (data: RecommendationRequest): Promise<RecommendationResponse> => {
    const response = await apiClient.post<RecommendationResponse>('/recommendations', data);
    return response.data;
  },
}; 