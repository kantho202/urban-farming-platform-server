import { model, Schema } from "mongoose";
import { IProduct } from "../types/products.interface";

const productSchema = new Schema<IProduct>({
  id: { type: String,  unique: true },
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  discountPrice: { type: Number },
  currency: { type: String, required: true },
  stock: { type: Number, required: true },
  sizes: [{ type: String }],
  colors: [{ type: String }],
  material: { type: String, required: true },
  sku: { type: String, required: true },
  images: [{ url: { type: String }, alt: { type: String } }],
  ratings: {
    average: { type: Number },
    count: { type: Number },
  },
  isFeatured: { type: Boolean, default: false },
  isPublished: { type: Boolean, default: true },
}, {
  timestamps: true,
});

export const products = model<IProduct>('products', productSchema, 'products');