import React from 'react';
import { ProductDisplaySmall, Product } from '@react-eshop-demo/product';

import './shop-page.scss';

/* eslint-disable-next-line */
export interface ShopPageProps {
  products: Array<Product>;
}

export function ShopPage(props: ShopPageProps) {
  const { products } = props;
  return (
    <>
      {products.map((product) => (
        <ProductDisplaySmall
          product={product}
          key={product.id}
        ></ProductDisplaySmall>
      ))}
    </>
  );
}

export default ShopPage;
