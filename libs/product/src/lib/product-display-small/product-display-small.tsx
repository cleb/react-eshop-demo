import React from 'react';
import Product from '../product';
import Card from 'react-bootstrap/Card';

import './product-display-small.scss';

/* eslint-disable-next-line */
export interface ProductDisplaySmallProps {
  product: Product;
}

export function ProductDisplaySmall(props: ProductDisplaySmallProps) {
  const { product } = props;
  return (
    <Card>
      <Card.Title>{product.name}</Card.Title>
    </Card>
  );
}

export default ProductDisplaySmall;
