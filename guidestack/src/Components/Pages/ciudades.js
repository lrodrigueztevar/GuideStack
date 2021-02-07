import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import HeaderPages from '../Header/headerpages';
import Footer from '../Footer/footer';
import config from '../Map/config';


class Ciudades extends Component {
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
                <section className="masthead text-center text-white" data-aos="fade-up" date-aos-delay={200}>
                    <div className="masthead-content">
                        <div class="container">
                            <h1 className="masthead-heading mb-0">¿Dónde quieres ir?</h1>
                            <h2 className="masthead-subheading mb-0">Elige en el mapa tu destino.</h2>
                        </div>
                    </div>
                </section>
                <section className="interactive-map" data-aos="fade-up" date-aos-delay={200}>
                    <div className="mapi">
                        <h1>Mapa Interactivo</h1>
                    </div>
                    {/*Google Maps*/}
                    <section className="Mapas" data-aos="fade-up" date-aos-delay={200}>
                        {/* Mapa inicial */}
                        <Map google={this.props.google}
                            initialCenter={{
                                lat: 39.816065096698715,
                                lng: -1.7648826526593528
                            }}
                            onClick={this.onMapClicked}
                            zoom={6}>
                            {/* Marcas de ciudades */}
                            <Marker onClick={this.onMarkerClick}
                                name={'Valencia'}
                                url={"/ciudades/ciudad"}
                                position={{ lat: 39.469917182196205, lng: -0.3762872295916296 }} />
                            <Marker onClick={this.onMarkerClick}
                                name={'Madrid'}
                                position={{ lat: 40.41690132102314, lng: -3.7035339069714057 }} />
                            <Marker onClick={this.onMarkerClick}
                                name={'Barcelona'}
                                position={{ lat: 41.38664764822073, lng: 2.170154299427398 }} />
                            {/* Cuadro de información */}
                            <InfoWindow
                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}>
                                <div>
                                    <a href="/ciudades/ciudad">
                                        <h6>{this.state.selectedPlace.name}</h6>
                                    </a>
                                </div>
                            </InfoWindow>
                        </Map>
                        {/*Google Maps*/}
                    </section>
                </section>
                <Footer />
            </>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: (config.apiKey) /* Clave API en config.js */
})(Ciudades)