import React from 'react';
import { ProductDisplaySmall, Product } from '@react-eshop-demo/product';

import './shop.scss';

/* eslint-disable-next-line */
export interface ShopProps {
  products: Array<Product>;
}

export function Shop(props: ShopProps) {
  const { products } = props;
  return products.map((product) => (
    <ProductDisplaySmall
      product={product}
      key={product.id}
    ></ProductDisplaySmall>
  ));
}

export default Shop;
