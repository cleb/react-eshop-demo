import React from 'react';

import './top-bar.scss';

/* eslint-disable-next-line */
export interface TopBarProps {}

export function TopBar(props: TopBarProps) {
  return (
    <header>
      <a href="/" title="Home">Demo Shop</a> 
    </header>
  );
}

export default TopBar;
