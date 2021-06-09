import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="relative py-32 bg-gray-900">
        <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-1">
            <div className="h-full xl:relative xl:col-span-2">
              <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src="assets/img/slide01.jpg"
                alt="Home"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-1 xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative pt-36 pb-64 sm:pb-64 xl:col-span-2 xl:pb-24">
            <h1 className="text-4xl md:text-6xl tracking-wide uppercase">
              <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                Bienvenidos a Guide Stack
              </span>
            </h1>
            <p className="mt-5 text-2xl text-gray-300">
              El mundo está repleto de aventuras y experiencias esperándote
            </p>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              <p>
                <span className="flex place-content-center text-2xl font-bold text-yellow-200">
                  84%
                  <svg
                    className="w-6 h-6 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    Usuarios interesados
                  </span>{" "}
                  por los resultados de nuestra web.
                </span>
              </p>
              <p>
                <span className="flex place-content-center text-2xl font-bold text-cyan-200">
                  100+
                  <svg
                    className="w-6 h-6 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  Usuarios quieren que se amplíe el proyecto
                  <span className="font-medium text-white">
                    {" "}
                    a más ciudades.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-50 py-7 sm:py-24 lg:py-32">
        <div className="relative">
          <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
              Objetivos
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Recursos útiles
            </p>
            <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
              Nos dedicamos a recopilar toda la información que necesitas para
              tu viaje en un sólo sitio, para que puedas disfrutar sin
              preocupaciones.
            </p>
          </div>
          <div className="mt-12 mx-auto max-w-md px-4 grid gap-10 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-2 lg:max-w-7xl">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-5/6 w-full object-cover"
                  src="assets/img/pic02.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white px-4 pb-5 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-2xl font-semibold text-cyan-600">
                    Planifica tu viaje
                  </p>
                  <p className="mt-2 italic text-sm font-medium text-gray-600">
                    Disfruta sin preocupaciones.
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Guide Stack centraliza información actualizada de diversas
                    ciudades para que puedas planificarte con antelación y te
                    sea más sencillo moverte en la nueva ciudad.
                  </p>
                  <div className="inline-flex rounded-md shadow mt-2">
                    <a
                      href="/ciudades"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-cyan-100 hover:bg-cyan-200"
                    >
                      Ir a ciudades
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
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-full w-full object-cover"
                  src="assets/img/pic03.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white px-4 pt-14 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-2xl font-semibold text-cyan-600">
                    Festividades
                  </p>
                  <p className="mt-2 italic text-sm font-medium text-gray-600">
                    Conoce cuál es el mejor momento para viajar.
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Nuestro calendario contiene las festividades de tu destino,
                    para que puedas conocer la cultura de la zona y unirte a las
                    fiestas para disfrutar de cada momento sin perder detalle.
                  </p>
                  <div className="inline-flex rounded-md shadow mt-2 mb-4 sm:mb-0">
                    <a
                      href="/calendario"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-cyan-100 hover:bg-cyan-200"
                    >
                      Ir a calendario
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
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="sm:flex-shrink-0">
                <img
                  className="sm:h-5/6 h-full w-full object-cover"
                  src="assets/img/pic01.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white px-4 pb-5 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-2xl font-semibold text-cyan-600">
                    Sobre nosotros
                  </p>
                  <p className="mt-2 italic text-sm font-medium text-gray-600">
                    Qué se intenta conseguir con este proyecto.
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    En GuideStack nos dedicamos a mejorar la experiencia de las
                    personas a la hora de realizar un viaje, mostrándote toda la
                    información de utilidad actualizada.
                  </p>
                  <div className="inline-flex rounded-md shadow mt-2">
                    <a
                      href="/ciudades"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-cyan-100 hover:bg-cyan-200"
                    >
                      Ir a nosotros
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
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-5/6 w-full object-cover"
                  src="assets/img/pic04.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white px-4 pb-5 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-2xl font-semibold text-cyan-600">
                    Información de necesidad
                  </p>
                  <p className="mt-2 italic text-sm font-medium text-gray-600">
                    Estar preparado es la prioridad.
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Para tener un viaje tranquilo, es importante conocer los
                    lugares necesarios en caso de urgencias desde transporte
                    público de la zona hasta hospitales, farmacias, bancos y
                    muchos más.
                  </p>
                  <div className="inline-flex rounded-md shadow mt-2">
                    <a
                      href="/ciudades"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-cyan-100 hover:bg-cyan-200"
                    >
                      Ir a ciudades
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
        </div>
      </div>
      <div className="relative py-10 bg-gray-900">
        <a href="/nosotros">
          <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-1">
              <div className="h-full xl:relative xl:col-span-2">
                <img
                  className="h-full w-full object-cover bg-local opacity-25 xl:absolute xl:inset-0"
                  src="assets/img/bg.jpg"
                  alt="Nosotros"
                />
                <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
              </div>
            </div>
          </div>
          <div className="text-center mx-auto max-w-md p-20 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl transition duration-500 transform hover:-translate-y-1 hover:scale-110">
            <h2 className="text-3xl font-semibold tracking-wider bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
              Sobre nosotros
            </h2>
            <p className="mt-2 mx-auto max-w-prose text-2xl text-gray-400">
              En GuideStack nos dedicamos a mejorar la experiencia de las
              personas a la hora de realizar un viaje, mostrándote toda la
              información de utilidad actualizada.
            </p>
          </div>
        </a>
      </div>
      <Footer />
    </>
  );
};
export default Home;
