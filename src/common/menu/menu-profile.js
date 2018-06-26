import React from 'react';
import './menu-profile.css';

const MenuProfile = (props)=>(
  <div className="nav-profile-content">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div 
          className="nav-profile" 
          style={{
            backgroundImage: `url(/assets/images/steve.jpg)`
          }}></div>
        Best Programmer
      </a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
        <a className="dropdown-item" href="#">Mi Perfil</a>
        <a className="dropdown-item" href="#">Configurar</a>
        <a className="dropdown-item" href="#">Cerrar Sesión</a>
      </div>
    </div>
);

export default MenuProfile;