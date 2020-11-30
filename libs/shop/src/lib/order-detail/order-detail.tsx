import React from 'react';
import { connect } from 'react-redux';
import OrderDetailPage from '../order-detail-page/order-detail-page';
import { Order, ShopStateSlice } from '../redux/state/shop-state';
import { useParams } from 'react-router-dom';

import './order-detail.scss';

/* eslint-disable-next-line */
export interface OrderDetailProps {
  orders: Array<Order>;
}

export function OrderDetailComponent(props: OrderDetailProps) {
  const { id } = useParams();
  const { orders } = props;
  const order = orders.find((order) => order.id === parseInt(id));
  return <OrderDetailPage order={order}></OrderDetailPage>;
}

function mapStateToProps(state: ShopStateSlice, ownProps: OrderDetailProps) {
  return {
    orders: state.shop.orders,
  };
}

export const OrderDetail = connect(mapStateToProps)(OrderDetailComponent);
