import React from 'react';
import { render } from '@testing-library/react';
import { Product } from '@react-eshop-demo/product';

import Shop from './shop';

describe('Shop', () => {
  const mockProduct: Product = {
    name: 'Test Product',
    id: 0,
    description: 'Lorem Ipsum',
    icon: '',
  };
  const mockProducts = [mockProduct];
  it('should render successfully', () => {
    const { baseElement } = render(<Shop products={mockProducts} />);
    expect(baseElement).toBeTruthy();
  });

  it('should show products', () => {
    const { getByText } = render(<Shop products={mockProducts} />);

    const product = getByText('Test Product');

    expect(product).toBeTruthy();
  });
});
