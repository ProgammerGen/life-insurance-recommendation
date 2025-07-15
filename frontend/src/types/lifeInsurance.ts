export type FormValues = {
  age: number;
  income: number;
  dependents: number;
  risk: 'Low' | 'Medium' | 'High';
};

export type RecommendationRequest = FormValues;

export type RecommendationResponse = {
  plan: string;
  explanation: string;
}; 