import React, { Component } from 'react';

import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';


class Home extends Component {
    render() {
        return (
            //HTML code.
            <div>
                <Header/>
                {/* ======= Hero Section ======= */}
                <section id="hero" className="d-flex justify-cntent-center align-items-center">
                    <div id="heroCarousel" className="container carousel carousel-fade" data-ride="carousel">
                        {/* Slide 1 */}
                        <div className="carousel-item active">
                            <div className="carousel-container">
                                <h2 className="animate__animated animate__fadeInDown">Bienvenidos a <span>Guide Stack</span></h2>
                                <p className="animate__animated animate__fadeInUp">Aquí podrás encontrar toda la información sobre tu aventura.</p>
                                <a href className="btn-get-started animate__animated animate__fadeInUp">Leer más</a>
                            </div>
                        </div>
                        {/* Slide 2 */}
                        <div className="carousel-item">
                            <div className="carousel-container">
                                <h2 className="animate__animated animate__fadeInDown">Ciudades y cultura</h2>
                                <p className="animate__animated animate__fadeInUp">El mundo está repleto de cultura esperándote.</p>
                                <a href className="btn-get-started animate__animated animate__fadeInUp">Leer más</a>
                            </div>
                        </div>
                        {/* Slide 3 */}
                        <div className="carousel-item">
                            <div className="carousel-container">
                                <h2 className="animate__animated animate__fadeInDown">Experimenta y disfruta</h2>
                                <p className="animate__animated animate__fadeInUp">Las experiencias que van más allá y proporcionan recuerdos únicos.</p>
                                <a href className="btn-get-started animate__animated animate__fadeInUp">Leer más</a>
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
                                <p>Stack Guide agrupa información de diversas ciudades de varios países para que te sea más sencillo moverte
                                    en la nueva ciudad.
                                </p>
                            </div>
                            <div className="row" data-aos="fade-up">
                                <div className="col-md-5">
                                    <img src="assets/img/features-1.svg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-7 pt-4">
                                    <h3>Información de necesidad de cada ciudad</h3>
                                    <p className="font-italic">
                                        Si estás en una ciudad que no conoces y necesitas saber dónde se encuentran los sitios
                                        de emergencia, Stack Guide te mostrará información de:
                                    </p>
                                    <ul>
                                        <li><i className="icofont-check" /> Hospitales.</li>
                                        <li><i className="icofont-check" /> Farmacias.</li>
                                        <li><i className="icofont-check" /> Comisarías de policia.</li>
                                        <li><i className="icofont-check" /> Bomberos.</li>
                                        <li><i className="icofont-check" /> Veterinarios.</li>
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
                                    <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                                    <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                                    <ul>
                                        <li><i className="icofont-check" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i className="icofont-check" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i className="icofont-check" /> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row" data-aos="fade-up">
                                <div className="col-md-5 order-1 order-md-2">
                                    <img src="assets/img/features-2.svg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-7 pt-5 order-2 order-md-1">
                                    <h3>Corporis temporibus maiores provident</h3>
                                    <p className="font-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Features Section */}
                    {/* ======= Why Us Section ======= */}
                    <section className="why-us section-bg" data-aos="fade-up" date-aos-delay={200}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 video-box">
                                    <img src="assets/img/why-us.jpg" className="img-fluid" alt="" />
                                    <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
                                </div>
                                <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-fingerprint" /></div>
                                        <h4 className="title"><a href>Lorem Ipsum</a></h4>
                                        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                    </div>
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-gift" /></div>
                                        <h4 className="title"><a href>Nemo Enim</a></h4>
                                        <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Why Us Section */}
                    
                     {/* ======= Services Section ======= */}
                     <section className="services">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
                                    <div className="icon-box icon-box-pink">
                                        <div className="icon"><i className="bx bxl-dribbble" /></div>
                                        <h4 className="title"><a href>Lorem Ipsum</a></h4>
                                        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="icon-box icon-box-cyan">
                                        <div className="icon"><i className="bx bx-file" /></div>
                                        <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
                                        <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="icon-box icon-box-green">
                                        <div className="icon"><i className="bx bx-tachometer" /></div>
                                        <h4 className="title"><a href>Magni Dolores</a></h4>
                                        <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="icon-box icon-box-blue">
                                        <div className="icon"><i className="bx bx-world" /></div>
                                        <h4 className="title"><a href>Nemo Enim</a></h4>
                                        <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Services Section */}
                </main>{/* End #main */}
                <Footer/>
            </div>
        )
    }
}
export default Home;