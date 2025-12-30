import apiClient from './client';

export interface FileUploadResponse {
  filename: string;
  original: string;
  size: number;
  url: string;
}

export const fileAPI = {
  uploadImage: async (file: File): Promise<FileUploadResponse> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await apiClient.post('/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  }
};
