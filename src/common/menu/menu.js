import React from 'react';
import './menu.css';

import {
  NavLink
} from 'react-router-dom';

const Menu = (props)=>(
  <div>
    Este es el menu xd
    <NavLink to="/">
      Al Home
    </NavLink>
  </div>
);

export default Menu;