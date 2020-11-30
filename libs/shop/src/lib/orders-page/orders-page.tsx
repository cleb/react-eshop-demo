import { OrderDto } from '@react-eshop-demo/api';
import React from 'react';
import { Link } from 'react-router-dom';

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
        <li key={order.id}>
          Order: items: {order.items.length}{' '}
          <Link to={`/orders/${order.id}`}>Detail</Link>
        </li>
      ))}
    </ul>
  );
}

export default OrdersPage;
