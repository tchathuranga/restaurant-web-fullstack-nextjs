import { VacancyProps } from '@/interfaces/vacancy';
import mongoose from 'mongoose';

const VacancySchema = new mongoose.Schema<VacancyProps>({
  title: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
}, {
  timestamps: true
});

export default mongoose.models.Vacancy || mongoose.model<VacancyProps>('Vacancy', VacancySchema);