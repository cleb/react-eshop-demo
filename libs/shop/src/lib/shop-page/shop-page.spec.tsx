import React from 'react';
import { render } from '@testing-library/react';
import { Product } from '@react-eshop-demo/product';

import ShopPage from './shop-page';

describe('ShopPage', () => {
  const mockProduct: Product = {
    name: 'Test Product',
    id: 0,
    description: 'Lorem Ipsum',
    icon: '',
  };
  const mockProducts = [mockProduct];
  it('should render successfully', () => {
    const { baseElement } = render(<ShopPage products={mockProducts} />);
    expect(baseElement).toBeTruthy();
  });

  it('should show products', () => {
    const { getByText } = render(<ShopPage products={mockProducts} />);

    const product = getByText('Test Product');

    expect(product).toBeTruthy();
  });
});
