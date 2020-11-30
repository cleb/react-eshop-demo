import React, { useEffect } from 'react';
import { Product } from '@react-eshop-demo/product';
import { connect } from 'react-redux';

import './shop.scss';
import ShopPage from './shop-page/shop-page';
import ShopState, { ShopStateSlice } from './redux/state/shop-state';
import { ProductInBasket } from './redux/state/product-in-basket';
import {
  addToBasket,
  loadProducts,
  placeOrder,
} from './redux/actions/shop-actions';
import { OrderDto } from '@react-eshop-demo/api';

/* eslint-disable-next-line */
export interface ShopProps {
  products: Array<Product>;
  loadAllProducts: () => void;
  addToBasket: (product: Product, amount: number) => void;
  placeOrder: (order: OrderDto) => void;
  basket: Array<ProductInBasket>;
}

export function ShopComponent(props: ShopProps) {
  useEffect(() => {
    props.loadAllProducts();
  }, []);

  const products = props.products ?? [];
  const { addToBasket, basket, placeOrder } = props;
  return (
    <ShopPage
      products={products}
      addToBasket={addToBasket}
      basket={basket}
      placeOrder={placeOrder}
    ></ShopPage>
  );
}

function mapStateToProps(state: ShopStateSlice) {
  return {
    products: state.shop.products,
    basket: state.shop.basket,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadAllProducts: () => dispatch(loadProducts()),
    addToBasket: (product: Product, amount: number) =>
      dispatch(addToBasket(product, amount)),
    placeOrder: (order: OrderDto) => dispatch(placeOrder(order)),
  };
}

export const Shop = connect(mapStateToProps, mapDispatchToProps)(ShopComponent);
