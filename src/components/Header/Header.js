import React from 'react';
import { NavLink } from 'react-router-dom';
import header from './Header.module.scss';

const Header = () => (
  <header>
    <h1 className={header.test}>Bookstore CMS</h1>
    <ul>
      <li><NavLink to="/" className={header.test}>BOOKS</NavLink></li>
      <li><NavLink to="categories" className={header.test}>CATEGORIES</NavLink></li>
    </ul>
    <span>Login ICON</span>
  </header>

);

export default Header;
