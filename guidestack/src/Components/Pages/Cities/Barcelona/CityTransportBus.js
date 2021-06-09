const CityTransportBus = () => {
    return (
      <>
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="lg:mb-60">
                <div className="mb-5">
                  <svg
                    className="h-10 w-10 text-gray-900 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2 className="leading-6 text-gray-700 font-semibold tracking-wide uppercase">
                    Transporte público
                  </h2>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    Autobús
                  </h1>
                  <p className="mt-6 text-xl text-gray-500">
                    Los autobuses conectan zonas de la ciudad que el metro no puede, además tiene horario nocturno de altas horas de la noche.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="https://www.tmb.cat/es/home" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-teal-200 hover:bg-teal-50"
                    >
                      Ir a la web
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
          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-screen lg:h-full lg:pl-12">
                <img
                  className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-screen"
                  src="https://www.tmb.cat/documents/20182/96078/Pl%C3%A0nol+de+la+xarxa+de+bus/23b78581-bf35-48f8-b038-033c7c1ff895?t=1600257691000"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default CityTransportBus;