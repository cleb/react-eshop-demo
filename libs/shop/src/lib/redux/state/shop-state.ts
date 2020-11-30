import { Product } from '@react-eshop-demo/product';
import { ProductInBasket } from './product-in-basket';

export interface ShopStateSlice {
  shop: ShopState;
}

export interface Order {
  id: number;
  items: Array<ProductInBasket>;
}

export default interface ShopState {
  products: Array<Product>;
  basket: Array<ProductInBasket>;
  orders: Array<Order>;
}
