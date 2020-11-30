import { Product } from '@react-eshop-demo/product';
import { Action } from 'redux';
import { DefaultApi, OrderDto } from '@react-eshop-demo/api';
import { ProductInBasket } from '../state/product-in-basket';
import { Order } from '../state/shop-state';

const api = new DefaultApi();

export enum ShopActionTypes {
  LOAD_PRODUCTS_SUCCESS = '[SHOP] LOAD_PRODUCTS_SUCCESS',
  LOAD_PRODUCTS = '[SHOP] LOAD_PRODUCTS',
  ADD_TO_BASKET = '[SHOP] ADD_TO_BASKET',
  PLACE_ORDER = '[SHOP] PLACE_ORDER',
  PLACE_ORDER_SUCCESS = '[SHOP] PLACE_ORDER_SUCCESS',
  LOAD_ORDERS = '[SHOP] LOAD_ORDERS',
  LOAD_ORDERS_SUCCESS = '[SHOP] LOAD_ORDERS_SUCCESS',
  LOAD_ORDER = '[SHOP] LOAD_ORDER',
  LOAD_ORDER_SUCCESS = '[SHOP] LOAD_ORDER_SUCCESS',
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

export interface LoadOrdersSuccessAction extends Action {
  orders: Array<Order>;
}

export interface LoadOrderSuccessAction extends Action {
  order: Order;
}

type PlaceOrderSuccessAction = Action;

export function loadProducts() {
  return (dispatch) => {
    api.productsGet().then((res) => {
      dispatch(loadProductsSuccess(res));
    });
  };
}

export function loadOrders() {
  return (dispatch) => {
    api.ordersGet().then((res) => {
      dispatch(loadOrdersSuccess(res));
    });
  };
}

export function loadOrder(id: number) {
  return (dispatch) => {
    api.ordersIdGet(id).then((res) => {
      dispatch(loadOrderSuccess(res));
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

export function loadOrdersSuccess(orders): LoadOrdersSuccessAction {
  return {
    type: ShopActionTypes.LOAD_ORDERS_SUCCESS,
    orders: orders,
  };
}

export function loadOrderSuccess(order): LoadOrderSuccessAction {
  return {
    type: ShopActionTypes.LOAD_ORDER_SUCCESS,
    order: order,
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
