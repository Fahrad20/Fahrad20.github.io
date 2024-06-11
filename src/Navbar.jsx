import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MainMenu } from './assets/icons/main_menu.svg';
import { ReactComponent as PortfolioMenu } from './assets/icons/portfolio_menu.svg';
import { ReactComponent as ProfileMenu } from './assets/icons/profile_menu.svg';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>
            <MainMenu />
          </Link>
        </li>
        <li>
          <Link to='/portfolio'>
            <PortfolioMenu />
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <ProfileMenu />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
