import { useState } from "react";
import CityTransportMetro from "./CityTransportMetro";
import CityTransportBus from "./CityTransportBus";
import CityTransportTrain from "./CityTransportTrain";

const CityTransport = () => {
  const [selectedTransportMethod, setSelectedTransportMethod] = useState('metro')
  
  return (
    <>
      <div className="pt-10 text-center bg-white border-t border-white">
        <h1 className="mb-5 text-gray-900 text-6xl font-extrabold tracking-tight sm:text-6xl">
          Transporte público
        </h1>
        <p className="pb-5 text-xl text-gray-700">
          Muévete sin problemas por la ciudad.
        </p>
      </div>
      <div className="flex place-content-center">
        <span className="inline-flex shadow-sm rounded-md">
          <button
            onClick={() => {
              setSelectedTransportMethod('metro')
            }}
            type="button"
            className="relative inline-flex items-center px-6 py-4 rounded-l-md border border-gray-300 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:text-white focus:bg-cyan-900 focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200"
          >
            Metro
          </button>
          <button
            onClick={() => {
              setSelectedTransportMethod('bus')
            }}
            type="button"
            className="-ml-px relative inline-flex items-center px-6 py-4 rounded-l-md border border-gray-300 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:text-white focus:bg-cyan-900 focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200"
          >
            Autobús
          </button>
          <button
            onClick={() => {
              setSelectedTransportMethod('train')
            }}
            type="button"
            className="disabled:opacity-50 -ml-px relative inline-flex items-center px-6 py-4 rounded-r-md border border-gray-300 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:text-white focus:bg-cyan-900 focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200" disabled
          >
            Cercanías
          </button>
        </span>
      </div>

      {selectedTransportMethod === 'metro' && <CityTransportMetro/>}
      {selectedTransportMethod === 'bus' && <CityTransportBus />}
      {selectedTransportMethod === 'train' && <CityTransportTrain />}
    </>
  );
};

export default CityTransport;
