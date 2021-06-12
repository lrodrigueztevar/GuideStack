import React, { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Header from "./Header";
import Footer from "./Footer";
import config from "./Map/config";

const Schedule = ({ google }) => {
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onMapClicked = (props) => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

  return (
    <>
      <Header />
      <div className="relative bg-gray-900">
        <div className="h-90 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
          <div className="h-full w-full">
            <div className="h-full">
              <img
                className="h-full w-full object-cover opacity-50 xl:absolute xl:inset-0"
                src="/assets/img/calendar.jpg "
                alt="Caledar"
              />
            </div>
          </div>
        </div>
        <div className="relative py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-sm font-semibold tracking-wide uppercase">
              <span className="bg-gradient-to-r from-green-200 to-blue-300 bg-clip-text text-transparent">
                Calendario de festividades
              </span>
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Viaja en el mejor momento
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-200">
              Selecciona en el mapa la ciudad de la que quieres saber sus festividades.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Map
          google={google}
          initialCenter={{
            lat: 39.816065096698715,
            lng: -1.7648826526593528,
          }}
          onClick={onMapClicked}
          zoom={6}
          containerStyle={{
            position: "relative",
            width: "100%",
            height: 700,
          }}
        >
          <Marker
            onClick={onMarkerClick}
            name={"Valencia"}
            url={"/calendario/valencia"}
            position={{ lat: 39.469917182196205, lng: -0.3762872295916296 }}
          />
          <Marker
            onClick={onMarkerClick}
            name={"Madrid"}
            url={"/calendario/madrid"}
            position={{ lat: 40.41690132102314, lng: -3.7035339069714057 }}
          />
          <Marker
            onClick={onMarkerClick}
            name={"Barcelona"}
            url={"/calendario/barcelona"}
            position={{ lat: 41.38664764822073, lng: 2.170154299427398 }}
          />
          <Marker
            onClick={onMarkerClick}
            name={"Cuenca"}
            url={"/ciudades/cuenca"}
            position={{ lat: 40.0716146193432, lng: -2.1372026862629543 }}
          />
          <Marker
            onClick={onMarkerClick}
            name={"Málaga"}
            url={"/ciudades/malaga"}
            position={{ lat: 36.719444, lng: -4.420000 }}
          />
          <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
            <div>
              <a href={selectedPlace.url}>
                <h6>{selectedPlace.name}</h6>
              </a>
            </div>
          </InfoWindow>
        </Map>
      </div>
      <Footer></Footer>
    </>
  );
};
export default GoogleApiWrapper({
  apiKey: config.apiKey /* Clave API en config.js */,
})(Schedule);
