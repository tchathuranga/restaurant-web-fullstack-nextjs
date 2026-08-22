export interface ItemProps {
  _id?: string;
  image: string;
  title: string;
  description?: string;
  price?: string;
  imageAlt?: string ;
  category: string;
  subcategory: string;
  createdAt?: Date;
  updatedAt?: Date;
}