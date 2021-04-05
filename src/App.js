import React from 'react';
import './Variables.scss';
import './App.scss';
import Header from './Header/Header.js';
import Content from './Content/Content.js';
import Footer from './Footer/Footer.js';

window.onload = () => {

  
      let imagenBar = document.getElementsByClassName("imagen")[0];
      // Initial state
      let scrollPos = 0;
      // adding scroll event
      window.addEventListener('scroll', function(){
         let scrollY = window.scrollY;
        // detects new state and compares it with the new one
        if ((document.body.getBoundingClientRect()).top > scrollPos) {
          console.log("up");
          console.log(scrollY);
          console.log(scrollPos);
          imagenBar.style.backgroundPosition = "0 -10px";
         } else {
          console.log("down");
          console.log(scrollY);
          console.log(scrollPos);
        // saves the new position for iteration.
        imagenBar.style.backgroundPosition = "0 -10px";
        scrollPos = (document.body.getBoundingClientRect()).top;
      }
    });
        



  
  
 /* let burguer = document.getElementsByClassName("burguer")[0];
  let menuMobile =  document.getElementsByClassName("menu-mobile")[0];
  let iconoBurguer = burguer.getElementsByTagName("i")[0];
  burguer.onclick = () => {
    if (menuMobile.style.display != 'block') {
      menuMobile.style.display = "block";
      iconoBurguer.classList.remove("fa-bars");
      iconoBurguer.classList.add("");
    } else {
      menuMobile.style.display = "none";
      iconoBurguer.classList.remove("fa-bars");
    }
  }*/
  
};

function App() {
  return (
    <div className="App">
      <Header />
      <div id="content">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;


