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
}

export interface FoodDetail {
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
    const response = await apiClient.get('/food/local', {
      params: { region }
    });
    return response.data;
  },

  getFoodDetail: async (food_id: number): Promise<FoodDetail> => {
    const response = await apiClient.get('/food/detail', {
      params: { food_id }
    });
    return response.data;
  },

  orderFood: async (data: OrderRequest): Promise<OrderResponse> => {
    const response = await apiClient.post('/food/order', data);
    return response.data;
  }
};
