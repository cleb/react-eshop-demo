import ShopState, { ProductInBasket } from '../state/shop-state';
import {
  ShopAction,
  ShopActionTypes,
  LoadProductsSuccessAction,
  AddToBasketAction,
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
    default:
      return state;
  }
}
