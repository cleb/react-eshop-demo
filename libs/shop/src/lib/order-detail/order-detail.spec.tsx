import React from 'react';
import { render } from '@testing-library/react';

import OrderDetail from './order-detail';

describe('OrderDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderDetail />);
    expect(baseElement).toBeTruthy();
  });
});
