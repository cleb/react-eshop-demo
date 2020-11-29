import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import './top-bar.scss';

/* eslint-disable-next-line */
export interface TopBarProps {}

export function TopBar(props: TopBarProps) {
  return (
    <Navbar>
      <Navbar.Brand href="/" title="Home">
        Demo shop
      </Navbar.Brand>
    </Navbar>
  );
}

export default TopBar;
