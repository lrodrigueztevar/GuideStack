import React, { Component } from 'react';

import HeaderPages from '../Header/headerpages';
import Footer from '../Footer/footer';


class Sitios extends Component {
    render() {
        return (
            <>
                <HeaderPages />
                <section class="masthead text-center text-white"  data-aos="fade-up" date-aos-delay={200}>
                    <div class="masthead-content">
                        <div class="container">
                            <h1 class="masthead-heading mb-0">¿Dónde quieres ir?</h1>
                            <h2 class="masthead-subheading mb-0">Elige en el mapa tu destino.</h2>
                        </div>
                    </div>
                </section>
                
                <Footer />
            </>
        )

    }

}

export default Sitios;