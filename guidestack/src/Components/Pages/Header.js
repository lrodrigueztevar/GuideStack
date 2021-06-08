import React from "react";

const activeSide =
  "bg-gray-800 bg-opacity-80 h-xxl w-80 transform transition-all fixed duration-700 text-white justify-center p-2";
const hiddenSide =
  "bg-gray-800 bg-opacity-80 h-full w-60 transform transition-all fixed duration-700 text-white justify-center p-2 -translate-x-60";
const activeButton =
  "absolute w-20 h-20 text-4xl font-black bg-gradient-to-r from-cyan-300 to-gray-900 bg-clip-text text-transparent bg-opacity-0 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center";
const normalButton =
  "absolute w-20 h-20 text-4xl font-black bg-gradient-to-r from-cyan-300 to-gray-900 bg-clip-text text-transparent bg-opacity-0 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center translate-x-60";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <div className="fixed top-0 left-0 right-0 z-20">
        <div className="w-10 h-10 flex transform relative transition-all duration-1000">
          <div className={this.state.active ? activeSide : hiddenSide}>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex items-center h-10 w-10 text-4xl font-medium rounded-md">
                  <img src="/assets/img/logo.png" alt="Logo" />
                </div>
                <div className="bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent group flex items-center px-2 text-3xl font-medium">
                  Guide Stack
                </div>
              </div>
              <div>
                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-900 group flex items-center px-2 py-2 text-2xl font-medium rounded-md"
                >
                  <svg
                    className="text-gray-400 mr-4 h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Inicio
                </a>
                <a
                  href="/ciudades"
                  className="text-gray-300 hover:bg-gray-900 hover:text-white group flex items-center px-2 py-2 text-2xl font-medium rounded-md"
                >
                  <svg
                    className="text-gray-400 group-hover:text-gray-300 mr-4 h-8 w-8"
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
                  Ciudades
                </a>
                <a
                  href="/calendario"
                  className="text-gray-300 hover:bg-gray-900 hover:text-white group flex items-center px-2 py-2 text-2xl font-medium rounded-md"
                >
                  <svg
                    className="text-gray-400 group-hover:text-gray-300 mr-4 h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Calendario
                </a>
                <a
                  href="/nosotros"
                  className="text-gray-300 hover:bg-gray-900 hover:text-white group flex items-center px-2 py-2 text-2xl font-medium rounded-md"
                >
                  <svg
                    className="text-gray-400 group-hover:text-gray-300 mr-4 h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Nosotros
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={this.state.active ? normalButton : activeButton}
          onClick={() => {
            this.setState({ active: !this.state.active });
          }}
        >
          {" "}
          &#9776;
        </div>
      </div>
    );
  }
}
export default Header;
