import { Product } from '@react-eshop-demo/product';
import { Action } from 'redux';
import { DefaultApi, OrderDto } from '@react-eshop-demo/api';
import { ProductInBasket } from '../state/product-in-basket';

const api = new DefaultApi();

export enum ShopActionTypes {
  LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS',
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
  ADD_TO_BASKET = 'ADD_TO_BASKET',
  PLACE_ORDER = 'PLACE_ORDER',
  PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS',
}

export interface LoadProductsSuccessAction extends Action {
  products: Array<Product>;
}

export interface AddToBasketAction extends Action {
  product: Product;
  amount: number;
}

export interface PlaceOrderAction extends Action {
  basket: Array<ProductInBasket>;
}

type PlaceOrderSuccessAction = Action;

export function loadProducts() {
  return (dispatch) => {
    api.productsGet().then((res) => {
      dispatch(loadProductsSuccess(res));
    });
  };
}

export function placeOrder(order: OrderDto) {
  return (dispatch) => {
    api.ordersPost(order).then((res) => {
      dispatch(placeOrderSuccess());
    });
  };
}

export function loadProductsSuccess(products): LoadProductsSuccessAction {
  return {
    type: ShopActionTypes.LOAD_PRODUCTS_SUCCESS,
    products: products,
  };
}

export function placeOrderSuccess(): PlaceOrderSuccessAction {
  return {
    type: ShopActionTypes.PLACE_ORDER_SUCCESS,
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

export type ShopAction =
  | LoadProductsSuccessAction
  | AddToBasketAction
  | PlaceOrderAction
  | PlaceOrderSuccessAction;
