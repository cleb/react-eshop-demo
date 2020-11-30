import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { Order, ShopStateSlice } from '../redux/state/shop-state';

import './orders.scss';
import { loadOrders } from '../redux/actions/shop-actions';
import OrdersPage from '../orders-page/orders-page';

/* eslint-disable-next-line */
export interface OrdersProps {
  loadOrders: () => void;
  orders: Array<Order>;
}

function OrdersComponent(props: OrdersProps) {
  const { loadOrders, orders } = props;
  useEffect(() => {
    loadOrders();
  }, [loadOrders]);
  return <OrdersPage orders={orders ?? []}></OrdersPage>;
}

function mapStateToProps(state: ShopStateSlice) {
  return {
    orders: state.shop.orders,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadOrders: () => dispatch(loadOrders()),
  };
}

export const Orders = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersComponent);
