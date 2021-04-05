import React from 'react';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import './Header.scss';
import image from '../images/logo.png';

const header = (props) => {
  return (
  <HashRouter>
  <header>
    <div className="container">
      <div className="row">
        <div className="logo col-lg-2 col-10">
          <NavLink to="/"><img src={image} /></NavLink> 
        </div>
      <div className="burguer col-lg-2 col-2">
       <a href="#"><i className="fas fa-bars"></i><i className="fas fa-times"></i></a>
       <ul className="menu-mobile">
          <li className="regular"><NavLink to="/about">Nosotros</NavLink></li>
          <li><NavLink to="/pyramids" className="regular">La Revista</NavLink></li>
          <li><NavLink to="/contact" className="regular">Contacto</NavLink></li>
        </ul>
      </div>
      <nav className="col-lg-10">
             <ul>
               <li className="regular"><NavLink to="/about">Nosotros</NavLink></li>
               <li><NavLink to="/pyramids" className="regular">Descargas</NavLink>
               </li>
               <li><NavLink to="/contact" className="regular">Contacto</NavLink></li>
             </ul>
           </nav> 
      </div>
      </div>
      </header>
  </HashRouter> );
         
}

export default header;


