import React from 'react';
import { render } from '@testing-library/react';

import OrderDetailPage from './order-detail-page';

describe('OrderDetailPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <OrderDetailPage order={{ id: 0, items: [] }} />
    );
    expect(baseElement).toBeTruthy();
  });
});
