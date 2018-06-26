import React from 'react';
import {
  NavLink
} from 'react-router-dom';

const MenuLink = (props)=>(
  <ul className="sidebar-nav">
    <li className="sidebar-brand">
      <img src="/assets/images/condor-isotipo.svg" alt="" />
        <NavLink to="/">
            Condor Cafe Admin
        </NavLink>
    </li>
    <li>
      <NavLink to="/">
        Inicio
      </NavLink>
    </li>
    <li>
      <NavLink to="/venta">
        Venta
      </NavLink>
    </li>
    <li>
      <NavLink to="/caja">
        Caja
      </NavLink>
    </li>
    <li>
      <NavLink to="/personal">
        Personal
      </NavLink>
    </li>
    <li>
      <NavLink to="/salon">
        Salones y Mesas
      </NavLink>
    </li>
    <li>
      <NavLink to="/productos">
        Productos
      </NavLink>
    </li>
    <li>
      <NavLink to="/reportes">
        Reportes
      </NavLink>
    </li>
  </ul>
);

export default MenuLink;