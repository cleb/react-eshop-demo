import ShopState from '../state/shop-state';
import { ProductInBasket } from '../state/ProductInBasket';
import {
  ShopAction,
  ShopActionTypes,
  LoadProductsSuccessAction,
  AddToBasketAction,
  LoadOrdersSuccessAction,
} from '../actions/shop-actions';

export function shopReducer(
  state: ShopState = { products: [], basket: [] },
  action: ShopAction
): ShopState {
  switch (action.type) {
    case ShopActionTypes.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: (action as LoadProductsSuccessAction).products,
      };
    case ShopActionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [
          ...state.basket,
          {
            product: (action as AddToBasketAction).product,
            amount: (action as AddToBasketAction).amount,
          },
        ],
      };
    case ShopActionTypes.LOAD_ORDERS_SUCCESS:
      return {
        ...state,
        orders: (action as LoadOrdersSuccessAction).orders,
      };
    default:
      return state;
  }
}
