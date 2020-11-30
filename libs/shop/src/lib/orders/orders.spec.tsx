import React from 'react';
import { render } from '@testing-library/react';

import { OrdersComponent } from './orders';

describe('Orders', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <OrdersComponent orders={[]} loadOrders={() => {}} />
    );
    expect(baseElement).toBeTruthy();
  });
});
