import { ProductDisplaySmall } from '@react-eshop-demo/product';
import React from 'react';
import { Order } from '../redux/state/shop-state';

import './order-detail-page.scss';

/* eslint-disable-next-line */
export interface OrderDetailPageProps {
  order: Order;
}

export function OrderDetailPage(props: OrderDetailPageProps) {
  const { order } = props;
  return (
    <>
      <h3>Items</h3>
      {order.items.map((item) => (
        <ProductDisplaySmall product={item.product} key={item.product.id}>
          <strong>Amount: {item.amount}</strong>
        </ProductDisplaySmall>
      ))}
    </>
  );
}

export default OrderDetailPage;
