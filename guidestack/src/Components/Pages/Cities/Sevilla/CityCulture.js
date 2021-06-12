const CityCulture = () => {
  return (
    <div className="relative bg-gray-900 pb-5">
      <div className="h-80 absolute inset-x-0 py-10 bottom-0 xl:top-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover xl:absolute xl:inset-0"
              src="/assets/img/ciudad1.jpg"
              alt="Ciudad"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold tracking-wide uppercase">
            <span className="text-base font-semibold uppercase tracking-wider text-gray-300">
              Cultura general
            </span>
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Valencia
          </p>
          <p className="mt-5 text-lg text-gray-300">
            Valencia es famosa por la Ciudad de las Artes y las Ciencias, con
            estructuras futurísticas, como el planetario, el <i>Oceanográfic</i>
            , museos interactivos, el Biopark (un zoo moderno) y sobretodo, por
            su festividad las <b>Fallas</b>, consideradas Patrimonio Cultural
            Inmaterial de la Humanidad y fiesta de gran interés turístico.
          </p>
          <div className="mt-8 pb-8 sm:mb-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/calendario/valencia"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
              >
                Ir a agenda
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

export default CityCulture;
