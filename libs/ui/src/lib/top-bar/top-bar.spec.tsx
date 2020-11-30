import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import TopBar from './top-bar';

describe('TopBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <TopBar />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a link to home', () => {
    const { getByTitle } = render(
      <Router>
        <TopBar />
      </Router>
    );

    const homeHref = getByTitle('Home');

    expect(homeHref).toBeTruthy();
  });
});
