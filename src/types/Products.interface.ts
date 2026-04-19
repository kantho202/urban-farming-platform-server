export interface IImage {
  url: string;
  alt: string;
}

export interface IRatings {
  average: number;
  count: number;
}

export interface IProduct {
  id: string;
  title: string;
  slug: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  discountPrice?: number;
  currency: string;
  stock: number;
  sizes: string[];
  colors: string[];
  material: string;
  sku: string;
  images: IImage[];
  ratings: IRatings;
  isFeatured: boolean;
  isPublished: boolean;
}