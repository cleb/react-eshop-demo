import React from 'react';
import { Product } from '@react-eshop-demo/product';

import './shop.scss';
import ShopPage from './shop-page/shop-page';

/* eslint-disable-next-line */
export interface ShopProps {}

export function Shop(props: ShopProps) {
  const mockProduct: Product = {
    name: 'Test Product',
    id: 0,
    description: 'Lorem Ipsum',
    icon: '',
  };
  const mockProducts = [mockProduct];
  return <ShopPage products={mockProducts}></ShopPage>;
}

export default Shop;
