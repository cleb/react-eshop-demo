import { Product } from '@react-eshop-demo/product';
import React, { useState } from 'react';

import './shop-buttons.scss';

/* eslint-disable-next-line */
export interface ShopButtonsProps {
  product: Product;
  addToBasket: (product: Product, amount: number) => void;
}

export function ShopButtons(props: ShopButtonsProps) {
  const [amount, setAmount] = useState(0);
  const { product, addToBasket } = props;
  const onChange = (event) => {
    setAmount(parseInt(event.target.value));
  };
  const add = (event) => addToBasket(product, amount);

  return (
    <>
      <input type="number" value={amount} onChange={onChange} />
      <button onClick={add}>Add to basket</button>
    </>
  );
}

export default ShopButtons;
