import apiClient from './client';

export interface RecordRegisterRequest {
  fisherman_id: string;
  type: string;
  region: string;
  fresh: string;
  description: string;
  amount: number;
  price: number;
}

export interface RecordRegisterResponse {
  record_id: number;
  message: string;
}

export interface Record {
  record_id: number;
  type: string;
  region: string;
  fresh: string;
  description: string;
  amount: number;
  price: number;
  remain: number;
}

export interface RecordUpdateRequest {
  type: string;
  region: string;
  fresh: string;
  description: string;
  amount: number;
  price: number;
  remain: number;
}

export const recordAPI = {
  register: async (data: RecordRegisterRequest): Promise<RecordRegisterResponse> => {
    const response = await apiClient.post('/record/register', data);
    return response.data;
  },

  getRecords: async (fisherman_id: string): Promise<Record[]> => {
    const response = await apiClient.get(`/record/${fisherman_id}`);
    return response.data;
  },

  updateRecord: async (record_id: string, data: RecordUpdateRequest): Promise<{ message: string }> => {
    const response = await apiClient.put(`/record/${record_id}`, data);
    return response.data;
  },

  deleteRecord: async (record_id: string): Promise<{ message: string }> => {
    const response = await apiClient.delete(`/record/${record_id}`);
    return response.data;
  }
};
