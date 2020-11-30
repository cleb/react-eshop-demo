import { Product } from '@react-eshop-demo/product';
import { Action } from 'redux';
import { DefaultApi } from '@react-eshop-demo/api';

const api = new DefaultApi();

export enum ShopActionTypes {
  LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS',
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
  ADD_TO_BASKET = 'ADD_TO_BASKET',
}

export interface LoadProductsSuccessAction extends Action {
  products: Array<Product>;
}

export interface AddToBasketAction extends Action {
  product: Product;
  amount: number;
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

export function addToBasket(
  product: Product,
  amount: number
): AddToBasketAction {
  return {
    type: ShopActionTypes.ADD_TO_BASKET,
    product: product,
    amount: amount,
  };
}

export type ShopAction = LoadProductsSuccessAction | AddToBasketAction;
