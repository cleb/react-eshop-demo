import { Product } from '@react-eshop-demo/product';

export interface ShopStateSlice {
  shop: ShopState;
}

export interface ProductInBasket {
  product: Product;
  amount: number;
}

export default interface ShopState {
  products: Array<Product>;
  basket: Array<ProductInBasket>;
}
