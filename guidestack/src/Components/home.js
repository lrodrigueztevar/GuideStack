import React, { Component } from 'react';

import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';


class Home extends Component {
    render() {
        return (
            //HTML code.
            <div>
                <Header />
                {/* ======= Hero Section ======= */}
                <section id="hero" className="d-flex justify-cntent-center align-items-center">
                    <div id="heroCarousel" className="container carousel carousel-fade" data-ride="carousel">
                        {/* Slide 1 */}
                        <div className="carousel-item active">
                            <div className="carousel-container">
                                <h2 className="animate__animated animate__fadeInDown">Bienvenidos a <span>Guide Stack</span></h2>
                                <p className="animate__animated animate__fadeInUp">Aquí podrás encontrar toda la información sobre tu aventura.</p>
                            </div>
                        </div>
                        {/* Slide 2 */}
                        <div className="carousel-item">
                            <div className="carousel-container">
                                <h2 className="animate__animated animate__fadeInDown">Ciudades y cultura</h2>
                                <p className="animate__animated animate__fadeInUp">El mundo está repleto de cultura esperándote.</p>
                            </div>
                        </div>
                        {/* Slide 3 */}
                        <div className="carousel-item">
                            <div className="carousel-container">
                                <h2 className="animate__animated animate__fadeInDown">Experimenta y disfruta</h2>
                                <p className="animate__animated animate__fadeInUp">Las experiencias que van más allá y proporcionan recuerdos únicos.</p>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true" />
                            <span className="sr-only">Anterior</span>
                        </a>
                        <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true" />
                            <span className="sr-only">Siguiente</span>
                        </a>
                    </div>
                </section>{/* End Hero */}
                <main id="main">
                    {/* ======= Features Section ======= */}
                    <section className="features">
                        <div className="container">
                            <div className="section-title">
                                <h2>¿Qué proporcionamos?</h2>
                                <p>Guide Stack agrupa información de diversas ciudades de varios países para que te sea más sencillo moverte
                                en la nueva ciudad.
                                </p>
                            </div>
                            <div className="row" data-aos="fade-up">
                                <div className="col-md-5">
                                    <img src="assets/img/features-1.svg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-7 pt-4">
                                    <h3>Información de necesidad.</h3>
                                    <p className="font-italic">
                                        Si estás en una ciudad que no conoces y necesitas saber dónde se encuentran algunos 
                                        sitios de necesidad, Guide Stack te mostrará información de:
                                    </p>
                                    <ul>
                                        <li><i className="icofont-check" /> Hospitales.</li>
                                        <li><i className="icofont-check" /> Farmacias.</li>
                                        <li><i className="icofont-check" /> Comisarías de policia.</li>
                                        <li><i className="icofont-check" /> Bancos.</li>
                                        <li><i className="icofont-check" /> Bomberos.</li>
                                        <li><i className="icofont-check" /> Veterinarios.</li>
                                        <li><i className="icofont-check" /> Gasolineras.</li>
                                        <li><i className="icofont-check" /> Supermercados.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row" data-aos="fade-up">
                                <div className="col-md-5 order-1 order-md-2">
                                    <img src="assets/img/features-4.svg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-7 pt-5 order-2 order-md-1">
                                    <h3>Agenda de cada ciudad</h3>
                                    <p className="font-italic">
                                        ¿Buscas un destino en el que haya una festividad?
                                    </p>
                                    <p>
                                        Nuestra agenda contiene todas las festividades de las ciudades de cada país, desde qué día
                                        comienzan hasta el día en el que terminan junto con un resumen de lo que se va a celebrar en
                                        esas fechas para que puedas estar al día.
                                    </p>
                                </div>
                            </div>

                            <div className="row" data-aos="fade-up">
                                <div className="col-md-5">
                                    <img src="assets/img/features-3.svg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-7 pt-5">
                                    <h3>Planea tu viaje.</h3>
                                    <p>Encuentra toda la información para moverte y experimentar la
                                        verdadera experiencia y cultura de tu destino:</p>
                                    <ul>
                                        <li><i className="icofont-check" /> Hoteles.</li>
                                        <li><i className="icofont-check" /> Restaurantes.</li>
                                        <li><i className="icofont-check" /> Transporte público.</li>
                                        <li><i className="icofont-check" /> Lugares de interés turístico.</li>
                                        <li><i className="icofont-check" /> Sitios culturales de la ciudad.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row" data-aos="fade-up">
                                <div className="col-md-5 order-1 order-md-2">
                                    <img src="assets/img/features-2.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-7 pt-5 order-2 order-md-1">
                                    <h3>Mapas</h3>
                                    <p className="font-italic">
                                        ¡Encuentra el sitio que necesitas más próximo a ti!
                                    </p>
                                    <p>
                                        Te mostramos y filtramos en el mapa dónde se encuentra cualquier
                                        sitio que necesites.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Features Section */}
                </main>{/* End #main */}
                <Footer />
            </div>
        )
    }
}
export default Home;