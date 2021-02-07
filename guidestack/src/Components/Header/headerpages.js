import React, { Component } from 'react';

class HeaderPages extends Component {
  render() {
    return (
      //HTML code.
      <header id="header" className="fixed-top">
        <div className="container">
          <div className="logo float-left">
            <h1 className="text-light"><a href="/"><span>Guide </span>
              <a href="/"><img src="/assets/img/logo.png" alt="" class="img-fluid" /></a>
              <span> Stack</span></a></h1>
          </div>
          <nav className="nav-menu float-right d-none d-lg-block">
            <ul>
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/ciudades">Ciudades</a></li>
              <li><a href="/agenda">Agenda</a></li>
              <li><a href="/login">Iniciar sesión</a></li>
            </ul>
          </nav>{/* .nav-menu <div className="nav-menu user">
            <a href="#"><i class="fa fa-3x fa-user"></i></a>
          </div> */}

        </div>
      </header>

    )
  }
}
export default HeaderPages;