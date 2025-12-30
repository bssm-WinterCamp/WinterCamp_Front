import apiClient from './client';

export interface Recommendation {
  food_id: number;
  name: string;
  reason: string;
}

export interface AIRecommendResponse {
  analysis?: string;
  recommendations?: Recommendation[];
  message?: string;
}

export const aiAPI = {
  getRecommendations: async (user_id: number): Promise<AIRecommendResponse> => {
    const response = await apiClient.get('/ai/recommend', {
      params: { user_id }
    });
    return response.data;
  }
};
