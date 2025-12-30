import apiClient from './client';

export interface LoginRequest {
  id: string;
  pw: string;
}

export interface LoginResponse {
  id: string;
  name: string;
  phoneNumber: string;
}

export const authAPI = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post('/user/login', data);

    // Save access token from header
    const accessToken = response.headers['accesstoken'];
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }

    // Save user data
    const userData = response.data;
    localStorage.setItem('user', JSON.stringify(userData));

    return userData;
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  },

  getCurrentUser: (): LoginResponse | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
};
