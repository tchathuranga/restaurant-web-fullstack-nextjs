import { PromotionProps } from "@/interfaces/promotions";

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

const BASE_URL = '/api/promotions';

// GET all promotions
export async function getAllPromotions(): Promise<ApiResponse<PromotionProps[]>> {
  try {
    const response = await fetch(`${BASE_URL}`);
    return response.json();
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch promotions",
    };
  }
}
