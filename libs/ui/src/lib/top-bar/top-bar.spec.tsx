import React from 'react';
import { render } from '@testing-library/react';

import TopBar from './top-bar';

describe('TopBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopBar />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a link to home', () => {
    const { getByTitle } = render(<TopBar />);

    const homeHref = getByTitle('Home');

    expect(homeHref).toBeTruthy();
  });
});
