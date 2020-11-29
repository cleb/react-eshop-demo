import Product from 'libs/product/src/lib/product';
import { Action } from 'redux';

export enum ShopActionTypes {
  LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS',
}

export interface LoadProductsSuccessAction extends Action {
  products: Array<Product>;
}

export function loadProductsSuccess(): LoadProductsSuccessAction {
  return {
    type: ShopActionTypes.LOAD_PRODUCTS_SUCCESS,
    products: [{ name: 'aaa', id: 1, description: 'Lorem ipsum', icon: '' }],
  };
}

export type ShopAction = LoadProductsSuccessAction;
