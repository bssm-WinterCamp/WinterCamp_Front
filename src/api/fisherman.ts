import apiClient from './client';

export interface FishermanRegisterRequest {
  user_id: number;
  group: string;
  region: string;
  phoneNumber: string;
  image: string;
}

export interface FishermanRegisterResponse {
  fisherman_id: string;
  message: string;
}

export interface FishermanProfile {
  group: string;
  region: string;
  name: string;
  phoneNumber: string;
}

export interface FishermanUpdateRequest {
  group: string;
  region: string;
  phoneNumber: string;
  name: string;
  image: string;
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
