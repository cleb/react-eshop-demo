import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import OrderDetailPage from '../order-detail-page/order-detail-page';
import { Order, ShopStateSlice } from '../redux/state/shop-state';
import { useParams } from 'react-router-dom';

import './order-detail.scss';
import { loadOrder } from '../redux/actions/shop-actions';

/* eslint-disable-next-line */
export interface OrderDetailProps {
  orders: Array<Order>;
  loadOrder: (id) => void;
}

export function OrderDetailComponent(props: OrderDetailProps) {
  const { id } = useParams();
  const { orders, loadOrder } = props;
  const order = orders.find((order) => order.id === parseInt(id));

  useEffect(() => {
    if (order === undefined) {
      loadOrder(id);
    }
  }, [order, id, loadOrder]);

  return order ? <OrderDetailPage order={order}></OrderDetailPage> : <></>;
}

function mapStateToProps(state: ShopStateSlice, ownProps: OrderDetailProps) {
  return {
    orders: state.shop.orders ?? [],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadOrder: (id) => dispatch(loadOrder(id)),
  };
}

export const OrderDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetailComponent);
