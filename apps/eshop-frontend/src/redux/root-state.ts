import ShopState from 'libs/shop/src/lib/redux/state/shop-state';
import AppState from './app-state';

export default interface RootState {
  app: AppState;
  shop: ShopState;
}
