import React, { Component } from 'react';

import Footer from '../Footer/footer';
import HeaderPages from '../Header/headerpages';

class Nosotros extends Component {
    render() {
        return (
            <>
                <HeaderPages />
                {/* ======= Why Us Section ======= */}
                <section className="why-us section-bg" data-aos="fade-up" date-aos-delay={200}>
                    <div className="row justify-content-center">
                            <h1 className="objetivos" >Sobre nosotros</h1>
                        </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 video-box">
                                <img src="assets/img/logo.png" alt="" class="img-fluid" />
                            </div>
                            <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                                <h1>Guide Stack</h1>
                                <p className="font-italic">Cada viaje es una nueva aventura.</p>
                                <p className="description">En Guide Stack nos preocupamos por las personas y nos
                                dedicamos a facilitarles la planificación de sus viajes, sean por motivos de trabajo como de turismo
                                con la intención de que nuestros usuarios disfruten sin preocupaciones de sus viajes.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Why Us Section */}

                {/* ======= Services Section =======*/}
                <section className="services  ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h1 className="objetivos" >Objetivos</h1>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                <a href="/sitios">
                                    <div className="icon-box icon-box-cyan">
                                        <div className="icon"><i className="bx bx-file" /></div>
                                        <h4 className="title"><a href>Informar</a></h4>
                                        <p className="description">Encontrarás información útil sobre tu destino, además de datos desde
                                        las fechas donde hay festividades, los lugares de interés cultural, eventos de la zona, etc hasta hoteles
                                    donde poder hospedarse.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
                                <a href="/sitios">
                                    <div className="icon-box icon-box-green">
                                        <div className="icon"><i className="bx bx-tachometer" /></div>
                                        <h4 className="title"><a href>Seguridad</a></h4>
                                        <p className="description">Lo más importante a la hora de hacer un viaje es la seguridad, por eso
                                        nos encargamos de recopilar información sobre hospitales, farmacias, comisarías de policia, etc
                                    con la intención de que esta información sea fácil de acceder en caso de emergencia.</p>
                                    </div>
                                </a>

                            </div>
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
                                <a href="/sitios">
                                    <div className="icon-box icon-box-blue">
                                        <div className="icon"><i className="bx bx-world" /></div>
                                        <h4 className="title"><a href>Guiar</a></h4>
                                        <p className="description">Podrás encontrar información de cómo llegar a donde te propongas
                                        gracias a que filtramos la información por tu ubicación actual, mostrandote resultados más
                                     cercanos a ti, además de darte información sobre el transporte público de la ciudad.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>{/* End Services Section */}

                {/* Team */}
                <section className="testimonials text-center bg-light" data-aos="fade-up" date-aos-delay={200}>
                    <div className="container">
                        <h1 className="mb-5">Nuestro equipo</h1>
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <a href="https://www.linkedin.com/in/laura-rodriguez-tevar/">
                                        <img className="img-fluid rounded-circle mb-3" src="assets/img/laura.jpg" alt="" />
                                    </a>
                                    <h5> Laura Rodríguez Tevar</h5>
                                    <p className="font-weight-light mb-0">Desarrolladora web</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </>
        )

    }

}

export default Nosotros;