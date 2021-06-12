const CityWelcome = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://cdn2.civitatis.com/espana/zaragoza/zaragoza.jpg"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
            Aragón
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Bienvenidos a Zaragoza
          </p>
          <p className="mt-3 text-lg text-gray-300">
          Ubicada a orillas del río Ebro, en el corazón de Aragón, Zaragoza es la quinta ciudad más poblada de España y una de las más visitadas del país. 
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://www.zaragoza.es/sede/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
              >
                Visita la web del ayuntamiento
                <svg
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CityWelcome;
