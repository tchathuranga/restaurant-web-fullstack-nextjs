import mongoose from 'mongoose';
import { ItemProps } from '@/interfaces/Items';

const ItemSchema = new mongoose.Schema<ItemProps>(
  {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },
    imageAlt: {
      type: String,
    },
    category: {
      type: String, 
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Item || mongoose.model<ItemProps>('Item', ItemSchema);