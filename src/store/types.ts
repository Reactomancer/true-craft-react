export interface Category {
  id: number;
  categoryName: string;
  previewImageLink: string;
}

export type CategoryFormData = Omit<Category, "id">;

export interface ProductCharacterstic {
  id?: number;
  key: string;
  productId?: number;
  value: string;
}

export interface Reviews {
  id: number;
  rating: number;
  reviewText: string;
  isVerified: boolean;
  userName: string;
  userId: number;
  productId: number;
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
  productMeta: ProductCharacterstic[];
  reviews?: Reviews[];
}

export interface CategoriesState {
  categories?: Category[];
  loading: boolean;
  error: string | null;
}

export interface ProductsState {
  products?: Product[];
  bestSales?: Product[];
  conversionRate?: number;
  currency?: string;
  search?: Product[];
  product?: Product;
  loading: boolean;
  error: string | null;
}

export interface CategoriesResponse {
  categories: Category[];
}

export interface ProductsResponse {
  products: Product[];
}

export interface ProductSearchParams {
  searchText: string;
}

export interface CurrencyParams {
  from: string;
  to: string;
}

export interface CurrencyResponse {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  target_code: string;
  conversion_rate: number;
}

export interface FavParams {
  userId: number;
  productId: number;
}

export interface FavResponse {
  userId: number;
  productId: number;
  id: number;
  product: Product;
}

export interface AddReviewParams {
  rating: number;
  userId: number;
  productId: number;
  isVerified: boolean;
  userName: string;
  reviewText: string;
}
