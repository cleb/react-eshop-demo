import React, { useEffect } from 'react';
import { Product } from '@react-eshop-demo/product';
import { connect } from 'react-redux';

import './shop.scss';
import ShopPage from './shop-page/shop-page';
import ShopState, { ShopStateSlice } from './redux/state/shop-state';
import { addToBasket, loadProducts } from './redux/actions/shop-actions';

/* eslint-disable-next-line */
export interface ShopProps {
  products: Array<Product>;
  loadAllProducts: () => void;
  addToBasket: (product: Product, amount: number) => void;
}

export function ShopComponent(props: ShopProps) {
  useEffect(() => {
    props.loadAllProducts();
  }, []);

  const products = props.products ?? [];
  const { addToBasket } = props;
  return <ShopPage products={products} addToBasket={addToBasket}></ShopPage>;
}

function mapStateToProps(state: ShopStateSlice) {
  return {
    products: state.shop.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadAllProducts: () => dispatch(loadProducts()),
    addToBasket: (product: Product, amount: number) =>
      dispatch(addToBasket(product, amount)),
  };
}

export const Shop = connect(mapStateToProps, mapDispatchToProps)(ShopComponent);
