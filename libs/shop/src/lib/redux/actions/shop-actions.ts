import { Product } from '@react-eshop-demo/product';
import { Action } from 'redux';
import { DefaultApi } from '@react-eshop-demo/api';

const api = new DefaultApi();

export enum ShopActionTypes {
  LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS',
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
}

export interface LoadProductsSuccessAction extends Action {
  products: Array<Product>;
}

export function loadProducts() {
  return (dispatch) => {
    api.productsGet().then((res) => {
      dispatch(loadProductsSuccess(res));
    });
  };
}

export function loadProductsSuccess(products): LoadProductsSuccessAction {
  return {
    type: ShopActionTypes.LOAD_PRODUCTS_SUCCESS,
    products: products,
  };
}

export type ShopAction = LoadProductsSuccessAction;
