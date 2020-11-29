import { combineReducers } from 'redux';
import appReducer from './app-reducer';
import { shopReducer } from '@react-eshop-demo/shop';

const rootReducer = combineReducers({
  app: appReducer,
  shop: shopReducer,
});

export default rootReducer;
