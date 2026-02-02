import { NewsProps } from "@/interfaces/news";

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

const BASE_URL = '/api/news';

export async function getAllNews(): Promise<ApiResponse<NewsProps[]>> {
  try {
    const response = await fetch(BASE_URL);
    return response.json();
  } catch (error: any) {
    return {
      success: false,
      error: error.message || 'Failed to fetch news',
    };
  }
}
