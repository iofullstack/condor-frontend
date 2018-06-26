import React from 'react';
import MenuProfile from './menu-profile';

const MenuTop = (props)=> (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <a className="navbar-brand" href="" onClick={ props.toggle } id="menu-toggle">
        <i className="material-icons">menu</i>
    </a>
    <MenuProfile />
  </nav>
);

export default MenuTop;