import ShopState from '../state/shop-state';
import { ShopAction, ShopActionTypes } from '../actions/shop-actions';

export function shopReducer(
  state: ShopState = { products: [] },
  action: ShopAction
): ShopState {
  switch (action.type) {
    case ShopActionTypes.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
}
