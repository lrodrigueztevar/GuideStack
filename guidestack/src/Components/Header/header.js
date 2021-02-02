import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      //HTML code.
      <header id="header" className="fixed-top header-transparent">
        <div className="container">
          <div className="logo float-left">
            <h1 className="text-light"><a href="#"><span>Guide </span>
              <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a>
            <span> Stack</span></a></h1>
            {/* Uncomment below if you prefer to use an image logo */}
          </div>
          <nav className="nav-menu float-right d-none d-lg-block">
            <ul>
              <li><a href="nosotros.html">Nosotros</a></li>
              <li><a href="mapa.html">Mapa</a></li>
              <li><a href="agenda.html">Agenda</a></li>
              <li><a href="login.html">Iniciar sesión</a></li>
              <li><a href="contact.html">Contacto</a></li>
            </ul>
          </nav>{/* .nav-menu */}
        </div>
      </header>

    )
  }
}
export default Header;