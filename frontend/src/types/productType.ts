
export interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  create_at: string;
}

export interface ProductStore {
  products: Product[];
  loading: boolean;
  error: string | null;

  formData: ProductFormData;
  setFormData: (formData: ProductFormData) => void;
  resetForm: () => void;

  addProduct: () => Promise<void>;
  fetchProducts: () => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
}

export interface ProductFormData {
  name: string;
  price: string;
  image: string;
}
