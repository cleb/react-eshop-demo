import React from 'react';
import { ProductDisplaySmall, Product } from '@react-eshop-demo/product';

import './shop-page.scss';
import ShopButtons from '../shop-buttons/shop-buttons';
import { ProductInBasket } from '../redux/state/product-in-basket';
import { OrderDto } from '@react-eshop-demo/api';

/* eslint-disable-next-line */
export interface ShopPageProps {
  products: Array<Product>;
  basket: Array<ProductInBasket>;
  addToBasket: (product: Product, amount: number) => void;
  placeOrder: (PlaceOrderDto) => void;
}

export function ShopPage(props: ShopPageProps) {
  const { products, addToBasket, basket, placeOrder } = props;

  const placeOrderClick = (event) => {
    const newOrder: OrderDto = {
      items: basket,
    };
    placeOrder(newOrder);
  };
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
      <h3>
        Products in basket:{' '}
        {basket.reduce((carry, value) => carry + value.amount, 0)}
      </h3>
      <button onClick={placeOrderClick}>Place order</button>
    </>
  );
}

export default ShopPage;
