import apiClient from './client';

export interface Food {
  id: number;
  remain: number;
  price: number;
  user_name: string;
  group_region: string;
  name: string;
  type: string;
  fresh: string;
  description: string;
  amount: string;
  created_at: string;
  image_url: string | null;
}

export interface FoodDetail {
  food_id: number;
  remain: number;
  price: number;
  user_name: string;
  group_region: string;
  name: string;
  type: string;
  fresh: string;
  description: string;
  amount: number;
  created_at: string;
  image_url?: string;
  status: string;
  fisherman_name: string;
  region: string;
  hashtag?: string;
  quantity: number;
  unit: string;
  phone_number: string;
  group: string;
  phoneNumber: string;
}

export interface OrderRequest {
  user_id: number;
  food_id: number;
  amount: number;
}

export interface OrderResponse {
  order_id: number;
  message: string;
  total_price: number;
}

export const foodAPI = {
  getLocalFood: async (region: string): Promise<Food[]> => {
    const response = await apiClient.post('/food/local', {
      region
    });
    return response.data;
  },

  getFoodDetail: async (food_id: number): Promise<FoodDetail> => {
    const response = await apiClient.post('/food/detail', {
      food_id
    });
    return response.data;
  },

  orderFood: async (data: OrderRequest): Promise<OrderResponse> => {
    const response = await apiClient.post('/food/order', data);
    return response.data;
  }
};
