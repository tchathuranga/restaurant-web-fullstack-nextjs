import { VacancyProps } from "@/interfaces/vacancy";

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

const BASE_URL = '/api/vacancy';

// GET all vacancies
export async function getAllVacancies(): Promise<ApiResponse<VacancyProps[]>> {
  try {
    const response = await fetch(BASE_URL);
    return response.json();
  } catch (error: any) {
    return {
      success: false,
      error: error.message || 'Failed to fetch vacancies',
    };
  } 
}

// GET single vacancy
export async function getVacancyById(id: string): Promise<ApiResponse<VacancyProps>> {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    return response.json();
  } catch (error: any) {
    return {
      success: false,
      error: error.message || 'Failed to fetch vacancy',
    };
  }
}
