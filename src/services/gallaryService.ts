import { IGallery } from "@/interfaces/gallery";

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

const BASE_URL = '/api/gallery';

// GET all gallery items
export async function getAllGalleryItems(): Promise<ApiResponse<IGallery[]>> {
  try {
    const response = await fetch(BASE_URL);
    return response.json();
  } catch (error: any) {
    return {
      success: false,
      error: error.message || 'Failed to fetch gallery items',
    };
  }
}
