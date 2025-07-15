import axios from 'axios';
import { RecommendationRequest, RecommendationResponse } from '@/types/lifeInsurance';

// Create a default axios client
const apiClient = axios.create({
  baseURL: 'http://localhost:3001', // Change to your backend base URL and port
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