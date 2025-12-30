import axios from 'axios';

// 개발 환경에서는 proxy 사용, 프로덕션에서는 직접 CDN 사용
const CDN_BASE_URL = import.meta.env.DEV 
  ? '/cdn' 
  : (import.meta.env.VITE_CDN_URL || 'https://cdn.zuu3.kr');

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

    const response = await axios.post(`${CDN_BASE_URL}/file`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  }
};
