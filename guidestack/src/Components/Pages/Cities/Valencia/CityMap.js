import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { useState } from "react";
import config from "../../Map/config";
import CityMapButtons from "./CityMapButtons";
import CityMapPlaceInfo from "./CityMapPlaceInfo";

const CityMap = ({ google }) => {
  const [markers, setMarkers] = useState([]);
  const [placesApi, setPlacesApi] = useState(null);
  const [activeResult, setActiveResult] = useState(null);

  const searchPlaces = (categoryName) => {
    placesApi.textSearch(
      {
        location: new google.maps.LatLng(
          39.482712332904015,
          -0.3764791634542603
        ),
        radius: "5000",
        query: categoryName,
      },
      (results, status) => {
        if (status !== "OK") {
          console.error(`Something went wrong searching places.`);
          return;
        }

        const markers = [];
        for (const result of results) {
          markers.push(
            <Marker
              onClick={() => {
                // TODO: Hacer scroll a la información del lugar.
                
                setActiveResult({
                  photoUrl:
                    result.photos?.length > 0
                      ? result.photos[0].getUrl()
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png",
                  name: result.name,
                  address: result.formatted_address,
                });
              }}
              key={result.name}
              name={result.name}
              position={{
                lat: result.geometry.location.lat(),
                lng: result.geometry.location.lng(),
              }}
            />
          );
        }

        setMarkers(markers);
      }
    );
  };

  const handleButtonClick = (categoryName) => {
    if (!placesApi) {
      console.error(`Places API isn't initialized for some reason.`);
      return;
    }
    searchPlaces(categoryName);
  };

  return (
    <div className="bg-gray-900">
      <div className="pt-10 text-center">
        <h1 className="mb-5 text-white text-6xl font-extrabold tracking-tight sm:text-6xl">
          Mapa interactivo
        </h1>
        <p className="pb-5 text-xl text-gray-300">
          Encuentra todo lo que necesites por la ciudad.
        </p>
      </div>
      <div>
        <Map
          google={google}
          initialCenter={{
            lat: 39.469917182196205,
            lng: -0.3762872295916296,
          }}
          zoom={14}
          containerStyle={{
            position: "relative",
            width: "100%",
            height: 700,
          }}
          onReady={(mapProps, map) => {
            setPlacesApi(new google.maps.places.PlacesService(map));
          }}
        >
          {markers}
        </Map>

        <CityMapButtons handleButtonClick={handleButtonClick} />

        {activeResult && (
          <CityMapPlaceInfo
            photoUrl={activeResult.photoUrl}
            address={activeResult.address}
            name={activeResult.name}
          />
        )}
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: config.apiKey,
})(CityMap);
