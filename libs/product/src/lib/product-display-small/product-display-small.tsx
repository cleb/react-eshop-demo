import React, { ReactNode } from 'react';
import Product from '../product';
import Card from 'react-bootstrap/Card';

import './product-display-small.scss';

/* eslint-disable-next-line */
export interface ProductDisplaySmallProps {
  product: Product;
  children?: ReactNode;
}

export function ProductDisplaySmall(props: ProductDisplaySmallProps) {
  const { product, children } = props;
  return (
    <Card>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>{product.description}</Card.Text>
      {children}
    </Card>
  );
}

export default ProductDisplaySmall;
