import React from 'react';
import { render } from '@testing-library/react';

import ProductDisplaySmall from './product-display-small';

describe('ProductDisplaySmall', () => {
  const testProduct = {
    name: 'Test Product',
    id: 1,
    icon: '',
    description: 'Lorem ipsum dolor sit amet',
  };
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProductDisplaySmall product={testProduct} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should display the product name', () => {
    const { getByText } = render(<ProductDisplaySmall product={testProduct} />);

    const productName = getByText('Test Product');

    expect(productName).toBeTruthy();
  });

  it('should display the product description', () => {
    const { getByText } = render(<ProductDisplaySmall product={testProduct} />);

    const productDescription = getByText('Lorem ipsum dolor sit amet');

    expect(productDescription).toBeTruthy();
  });

  it('should display the inner content', () => {
    const { getByText } = render(
      <ProductDisplaySmall product={testProduct}>
        <div>Buttons will be here</div>
      </ProductDisplaySmall>
    );

    const innerContent = getByText('Buttons will be here');

    expect(innerContent).toBeTruthy();
  });
});
