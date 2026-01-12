export interface JobData {
    id: number;
    title: string;
    location: string;
    employmentType: string;
    description?: string;
    requirements: string[];
    qualifications: string[];
}[]