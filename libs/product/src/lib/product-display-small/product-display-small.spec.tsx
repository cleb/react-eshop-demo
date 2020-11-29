import React from 'react';
import { render } from '@testing-library/react';

import ProductDisplaySmall from './product-display-small';

describe('ProductDisplaySmall', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProductDisplaySmall
        product={{ name: 'Test Product', id: 1, icon: '' }}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should display the product name', () => {
    const { getByText } = render(
      <ProductDisplaySmall
        product={{ name: 'Test Product', id: 1, icon: '' }}
      />
    );

    const productName = getByText('Test Product');

    expect(productName).toBeTruthy();
  });
});
