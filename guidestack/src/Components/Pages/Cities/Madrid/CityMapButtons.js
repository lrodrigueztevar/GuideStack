const CityMapButtons = ({ handleButtonClick }) => {
  return (
    <div className="mt-5 pb-5 flex place-content-center">
      <span className="inline-flex shadow-sm rounded-md">
        <button
          onClick={() => {
            handleButtonClick("sitios de interes");
          }}
          type="button"
          className="relative inline-flex items-center px-6 py-4 rounded-l-md border border-gray-300 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:text-white focus:bg-cyan-900 focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200"
        >
          Sitios de interés
        </button>
        <button
          onClick={() => {
            handleButtonClick("hospitales");
          }}
          type="button"
          className="-ml-px relative inline-flex items-center px-6 py-4 rounded-l-md border border-gray-300 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:text-white focus:bg-cyan-900 focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200"
        >
          Hospitales
        </button>
        <button
          onClick={() => {
            handleButtonClick("farmacias");
          }}
          type="button"
          className="-ml-px relative inline-flex items-center px-6 py-4 border border-gray-300 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:text-white focus:bg-cyan-900 focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200"
        >
          Farmacias
        </button>
        <button
          onClick={() => {
            handleButtonClick("comisarías");
          }}
          type="button"
          className="-ml-px relative inline-flex items-center px-6 py-4 border border-gray-300 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:text-white focus:bg-cyan-900 focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200"
        >
          Comisarías
        </button>
        <button
          onClick={() => {
            handleButtonClick("bomberos");
          }}
          type="button"
          className="-ml-px relative inline-flex items-center px-6 py-4 border border-gray-300 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:text-white focus:bg-cyan-900 focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200"
        >
          Bomberos
        </button>
        <button
          onClick={() => {
            handleButtonClick("veterinarios");
          }}
          type="button"
          className="-ml-px relative inline-flex items-center px-6 py-4 border border-gray-300 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:text-white focus:bg-cyan-900 focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200"
        >
          Veterinarios
        </button>
        <button
          onClick={() => {
            handleButtonClick("hoteles");
          }}
          type="button"
          className="-ml-px relative inline-flex items-center px-6 py-4 border border-gray-300 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:text-white focus:bg-cyan-900 focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200"
        >
          Hoteles
        </button>
        <button
          onClick={() => {
            handleButtonClick("bancos");
          }}
          type="button"
          className="-ml-px relative inline-flex items-center px-6 py-4 border border-gray-300 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:text-white focus:bg-cyan-900 focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200"
        >
          Bancos
        </button>
        <button
          onClick={() => {
            handleButtonClick("gasolineras");
          }}
          type="button"
          className="-ml-px relative inline-flex items-center px-6 py-4 border border-gray-300 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:text-white focus:bg-cyan-900 focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200"
        >
          Gasolineras
        </button>
        <button
          onClick={() => {
            handleButtonClick("supermercados");
          }}
          type="button"
          className="-ml-px relative inline-flex items-center px-6 py-4 border border-gray-300 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:text-white focus:bg-cyan-900 focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200"
        >
          Supermercados
        </button>
        <button
          onClick={() => {
            handleButtonClick("restaurantes");
          }}
          type="button"
          className="-ml-px relative inline-flex items-center px-6 py-4 rounded-r-md border border-gray-300 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:text-white focus:bg-cyan-900 focus:outline-none focus:ring-1 focus:ring-cyan-200 focus:border-cyan-200"
        >
          Restaurantes
        </button>
      </span>
    </div>
  );
};

export default CityMapButtons;
