import mongoose from 'mongoose';
import { NewsProps } from '@/interfaces/news';

const NewsSchema = new mongoose.Schema<NewsProps>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true
});

export default mongoose.models.News || mongoose.model<NewsProps>('News', NewsSchema);