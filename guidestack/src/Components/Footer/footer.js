import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      //This is the area where you paste your HTML codes
      <footer>
        <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500}>
          <div className="footer-newsletter">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h4>Newsletter</h4>
                  <p>Suscríbete a nuestro boletín informativo.</p>
                   <div>
                    También puedes <a href="/register">registrarte</a> o <a href="/login">iniciar sesión</a>.
                  </div>
                </div>
                <div className="col-lg-6">
                  <form action method="post">
                    <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Términos de servicio y privacidad</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Términos de servicio</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Política de privacidad</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h4>Contacto</h4>
                  <p>
                    Calle Ingeniero Vicente Pichó, 3 <br />
                  Comunidad Valenciana, Valencia, 46020<br />
                  España <br /><br />
                    <strong>Teléfono:</strong> +34 695 395 463<br />
                    <strong>Email:</strong> laura.rodriguez.tevar@gmail.com<br />
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-info">
                  <h3>Sobre Guide Stack</h3>
                  <p>Estas son las redes sociales en las que nos puedes encontrar.</p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright <strong><span>Guide Stack</span></strong>. All Rights Reserved
          </div>
            <div>
              Creado por<a href="https://www.linkedin.com/in/laura-rodriguez-tevar/"> Laura Rodríguez Tevar</a>
            </div>
          </div>
        </footer>{/* End Footer */}
      </footer>
    )
  }
}
export default Footer;