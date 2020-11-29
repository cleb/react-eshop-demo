import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './top-bar.scss';

/* eslint-disable-next-line */
export interface TopBarProps {}

export function TopBar(props: TopBarProps) {
  return (
    <Navbar>
      <Navbar.Brand title="Home">
        <Link to="/">Demo shop</Link>
      </Navbar.Brand>
    </Navbar>
  );
}

export default TopBar;
