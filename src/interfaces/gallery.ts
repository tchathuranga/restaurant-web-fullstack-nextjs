export interface GalleryImage {
  src: string;
  alt: string;
}

export interface IGallery {
  _id?: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}