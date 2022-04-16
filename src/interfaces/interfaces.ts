export interface IProduct {
  id: number;
  category?: string;
  title: string;
  image?: string;
  description: string;
  price: number;
  rating?: {
    rate: number;
    count: number;
  };
}

export interface ICartItem {
  product: IProduct;
  count: number;
}

export interface CartState {
  value: ICartItem[];
}
