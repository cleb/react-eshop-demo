import { OrderDto } from 'libs/api/api';
import React from 'react';

import './orders-page.scss';

/* eslint-disable-next-line */
export interface OrdersPageProps {
  orders: Array<OrderDto>;
}

export function OrdersPage(props: OrdersPageProps) {
  const { orders } = props;
  return (
    <ul>
      {orders.map((order) => (
        <li>Order: items: {order.items.length}</li>
      ))}
    </ul>
  );
}

export default OrdersPage;
