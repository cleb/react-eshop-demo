import React from 'react';
import { render } from '@testing-library/react';

import OrdersPage from './orders-page';

describe('OrdersPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrdersPage />);
    expect(baseElement).toBeTruthy();
  });
});
