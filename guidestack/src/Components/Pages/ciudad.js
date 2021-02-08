import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import HeaderPages from '../Header/headerpages';
import Footer from '../Footer/footer';
import config from '../Map/config';


class Ciudad extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
    render() {
        return (
            <>
                <HeaderPages />
                {/* Intro */}
                <section className="showcase" data-aos="fade-up" date-aos-delay={200}>
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: 'url("/assets/img/ciudad1.jpg")' }} />
                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h1>Bienvenidos a Valencia{this.state.selectedPlace.name}</h1>
                                <p className="lead mb-0">Es una de las ciudades más grandes, antiguas e importantes de España.
                                Situada a orillas del Mar Mediterráneo, donde el río Turia se une al mar. Esta ciudad
                                posee bellas playas muy cerca del centro de la ciudad.
                                </p>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: 'url("/assets/img/ciudad2.jpg")' }} />
                            <div className="col-lg-6 my-auto showcase-text">
                                <h2>Cultura</h2>
                                <p className="lead mb-0">Valencia es famosa por la Ciudad de las Artes y las Ciencias, con estructuras futurísticas,
                                 como el planetario, el <i>Oceanográfic</i>, museos interactivos, el Biopark (un zoo moderno) y muchas cosas más.</p>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: 'url("/assets/img/ciudad3.jpg")' }} />
                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>Paisajes</h2>
                                <p className="lead mb-0">Valencia tiene unos paisajes preciosos, desde <i>"la pequeña venecia"</i> situada en Port Saplaya,
                                 hasta paisajes de montaña impresionantes como <i>El Garbí</i>, un mirador situado en la sierra.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Intro */}
                {/* Mapa Interactivo Title */}
                <section className="interactive-map" data-aos="fade-up" date-aos-delay={200}>
                    <div className="mapi">
                        <h2>Mapa Interactivo</h2>
                    </div>
                    {/*Google Maps*/}
                    <section className="Mapas" data-aos="fade-up" date-aos-delay={200}>
                        {/* Mapa inicial */}
                        <Map google={this.props.google}
                            initialCenter={{
                                lat: 39.469917182196205,
                                lng: -0.3762872295916296
                            }}
                            onClick={this.onMapClicked}
                            zoom={14}>
                        </Map>
                    </section>
                </section>
                {/*End Google Maps*/}
                <section className="botones-sitios">
                    {/* End Mapa Interactivo Title */}
                    <div className="btn-group btn-group-lg" role="group" data-aos="fade-up" date-aos-delay={200}>
                        <button type="button" className="btn btn-outline-light" data-toggle="collapse" data-target="#collapsedata">Sitios de interés</button>
                        <button type="button" className="btn btn-outline-light" data-toggle="collapse" data-target="#collapsedata">Transporte</button>
                        <button type="button" className="btn btn-outline-light" data-toggle="collapse" data-target="#collapsedata">Hospitales</button>
                        <button type="button" className="btn btn-outline-light" data-toggle="collapse" data-target="#collapsedata">Farmacias</button>
                        <button type="button" className="btn btn-outline-light" data-toggle="collapse" data-target="#collapsedata">Comisarías</button>
                        <button type="button" className="btn btn-outline-light" data-toggle="collapse" data-target="#collapsedata">Bomberos</button>
                        <button type="button" className="btn btn-outline-light" data-toggle="collapse" data-target="#collapsedata">Veterinarios</button>
                        <button type="button" className="btn btn-outline-light" data-toggle="collapse" data-target="#collapsedata">Hoteles</button>
                        <button type="button" className="btn btn-outline-light" data-toggle="collapse" data-target="#collapsedata">Bancos</button>
                        <button type="button" className="btn btn-outline-light" data-toggle="collapse" data-target="#collapsedata">Gasolineras</button>
                        <button type="button" className="btn btn-outline-light" data-toggle="collapse" data-target="#collapsedata">Supermercados</button>
                        <button type="button" className="btn btn-outline-light" data-toggle="collapse" data-target="#collapsedata">Restaurantes</button>
                    </div>
                </section>
                <div className="collapse" id="collapsedata">
                    <div class="card">
                        <div className="container-fluid p-0">
                            <div className="row no-gutters">
                                <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: 'url("/assets/img/ciudad2.jpg")' }} />
                                <div className="col-lg-6 my-auto showcase-text" >
                                    <div className="boxinfo">
                                        <h2>Título</h2>
                                        <p className="lead mb-0">Valencia es famosa por la Ciudad 
                                        de las Artes y las Ciencias, con estructuras futurísticas,
                                    como el planetario, el <i>Oceanográfic</i>, 
                                    museos interactivos, el Biopark (un zoo moderno) y muchas cosas más.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: (config.apiKey) /* Clave API en config.js */
})(Ciudad)