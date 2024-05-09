export interface Category {
  id: number;
  categoryName: string;
  previewImageLink: string;
}

export type CategoryFormData = Omit<Category, "id">;

export interface ProductCharacterstic {
  key: string;
  value: string;
}

export interface Product {
  id?: number;
  productName: string;
  description: string;
  firstPrice: number;
  currentPrice: number;
  discount: number;
  previewImageLink: string;
  rating: string;
  categoryId: number;
  characteristics: ProductCharacterstic[];
}

export interface CategoriesState {
  categories?: Category[];
  loading: boolean;
  error: string | null;
}

export interface ProductsState {
  products?: Product[];
  loading: boolean;
  error: string | null;
}

export interface CategoriesResponse {
  categories: Category[];
}

export interface ProductsResponse {
  products: Product[];
}
