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
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 video-box">
                                <img src="assets/img/logo.png" alt="" class="img-fluid" />
                            </div>
                            <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                                <h1>Guide Stack</h1>
                                <p className="font-italic">Cada viaje es una nueva aventura.</p>
                                <p className="description">En Guide Stack nos dedicamos a facilitarle a las
                                personas la planificación de sus viajes, sean por motivos de trabajo como de turismo.</p>
                            </div>
                        </div>
                    </div>
                </section>{/* End Why Us Section */}

                {/* ======= Services Section =======*/}
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
                <Footer />
            </>
        )

    }

}

export default Nosotros;