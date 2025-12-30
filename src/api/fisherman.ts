import apiClient from './client';

export interface FishermanRegisterRequest {
  name: string;
  phone_number: string;
  region: string;
  password: string;
}

export interface FishermanRegisterResponse {
  fisherman_id: string;
  message: string;
}

export interface FishermanProfile {
  fisherman_id: string;
  name: string;
  phone_number: string;
  region: string;
  total_sales?: number;
  total_revenue?: number;
}

export interface FishermanUpdateRequest {
  name: string;
  phone_number: string;
  region: string;
}

export const fishermanAPI = {
  register: async (data: FishermanRegisterRequest): Promise<FishermanRegisterResponse> => {
    const response = await apiClient.post('/fisherman/register', data);
    return response.data;
  },

  getProfile: async (fisherman_id: string): Promise<FishermanProfile> => {
    const response = await apiClient.get(`/fisherman/${fisherman_id}`);
    return response.data;
  },

  updateProfile: async (fisherman_id: string, data: FishermanUpdateRequest): Promise<{ message: string }> => {
    const response = await apiClient.put(`/fisherman/${fisherman_id}`, data);
    return response.data;
  }
};
