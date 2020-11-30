import React from 'react';
import { ProductDisplaySmall, Product } from '@react-eshop-demo/product';

import './shop-page.scss';
import ShopButtons from '../shop-buttons/shop-buttons';

/* eslint-disable-next-line */
export interface ShopPageProps {
  products: Array<Product>;
  addToBasket: (product: Product, amount: number) => void;
}

export function ShopPage(props: ShopPageProps) {
  const { products, addToBasket } = props;

  return (
    <>
      {products.map((product) => (
        <ProductDisplaySmall product={product} key={product.id}>
          <ShopButtons
            product={product}
            addToBasket={addToBasket}
          ></ShopButtons>
        </ProductDisplaySmall>
      ))}
    </>
  );
}

export default ShopPage;
