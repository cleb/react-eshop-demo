import Product from 'libs/product/src/lib/product';

export interface ShopStateSlice {
  shop: ShopState;
}

export default interface ShopState {
  products: Array<Product>;
}
