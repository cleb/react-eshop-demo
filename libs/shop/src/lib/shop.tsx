import React, { useEffect } from 'react';
import { Product } from '@react-eshop-demo/product';
import { connect } from 'react-redux';

import './shop.scss';
import ShopPage from './shop-page/shop-page';
import ShopState, { ShopStateSlice } from './redux/state/shop-state';
import { loadProducts } from './redux/actions/shop-actions';

/* eslint-disable-next-line */
export interface ShopProps {
  products: Array<Product>;
  loadAllProducts: () => void;
}

export function ShopComponent(props: ShopProps) {
  useEffect(() => {
    props.loadAllProducts();
  });

  const products = props.products ?? [];
  return <ShopPage products={products}></ShopPage>;
}

function mapStateToProps(state: ShopStateSlice) {
  return {
    products: state.shop.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadAllProducts: () => dispatch(loadProducts()),
  };
}

export const Shop = connect(mapStateToProps, mapDispatchToProps)(ShopComponent);
