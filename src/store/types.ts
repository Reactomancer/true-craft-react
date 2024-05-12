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
