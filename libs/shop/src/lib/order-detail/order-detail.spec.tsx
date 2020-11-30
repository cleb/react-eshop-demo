import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import { OrderDetailComponent } from './order-detail';

describe('OrderDetailComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <OrderDetailComponent orders={[]} loadOrder={() => {}} />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
