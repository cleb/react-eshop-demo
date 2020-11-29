import React from 'react';
import { render } from '@testing-library/react';
import { Product } from '@react-eshop-demo/product';

import Shop from './shop';

describe('Shop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shop />);
    expect(baseElement).toBeTruthy();
  });
});
