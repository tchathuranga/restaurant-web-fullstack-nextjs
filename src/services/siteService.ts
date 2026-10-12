import { BranchProps } from "@/interfaces/branch";

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// GET banner images keyed by page
export async function getBanners(): Promise<ApiResponse<Record<string, string[]>>> {
  try {
    const response = await fetch('/api/banners', { cache: 'no-store' });
    return response.json();
  } catch (error) {
    return { success: false, error: "Failed to fetch banners" };
  }
}

// GET all branches
export async function getBranches(): Promise<ApiResponse<BranchProps[]>> {
  try {
    const response = await fetch('/api/branches', { cache: 'no-store' });
    return response.json();
  } catch (error) {
    return { success: false, error: "Failed to fetch branches" };
  }
}
