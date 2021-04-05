import React from 'react';
import './Downloads.scss';
import image from '../images/nro1.jpg';



const downloads = (props) => {
  return (
    <React.Fragment>
    <div className="imagen-numeros imagen container-fluid"></div>
  <div className="container-fluid downloads">
    <div className="container">
        <div className="row">
          <ul class="numeros">
            <li className="col-md-3"><a className="imagen" href="/Files/NRO1.pdf" download><img src={image} alt=""/></a><a className="nombre" href="#">Nro 1</a></li>
            <li className="col-md-3"><a className="imagen" href="/Files/NRO1.pdf" download><img src={image} alt=""/></a><a className="nombre" href="#">Nro 1</a></li>
          </ul>
        </div>
        </div>
        </div>
         </React.Fragment>
      
      
      )   
         
    }


export default downloads;