import { ItemProps } from "@/interfaces/Items";

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

const BASE_URL = '/api/items';

export async function fetchAllItems(): Promise<ApiResponse<ItemProps[]>> {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return { success: true, data: data.data };
  } catch (error: any) {
    return { success: false, error: error.message || 'An error occurred' };
  }
}