const CalendarFestivities = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex-shrink-0 flex flex-col rounded-md">
        <div className="flex-1 min-h-0">
          <ul className="pt-3 space-y-3">
            <li>
              <div className="md:flex md:justify-between max-w-screen transition duration-500 transform hover:-translate-y-1 hover:scale-110 border bg-white border-gray-200 rounded-lg shadow-md">
                <div className="self-center ml-20 text-lg text-gray-900 w-1/2">
                  <div className="font-bold">Día de la comunidad de Madrid - 02/05/2021</div>
                  <div className="text-sm text-gray-500">
                    Día en recuerdo del Levantamiento del 2 de mayo de 1808 en contra de la ocupación francesa.
                  </div>
                </div>
                <div className="w-full md:flex md:items-center md:justify-start lg:inline-flex md:w-1/2">
                  <div className="self-center lg:pl-2 flex-shrink-0">
                    <img
                      className="h-36 w-full md:w-screen object-cover opacity-50 border rounded-xl md:rounded-full"
                      src="https://www.valdemorilloenvivo.com/wp-content/uploads/2016/05/valdemorillo-comunidad-de-madrid-1.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="md:flex md:justify-between transition duration-500 transform hover:-translate-y-1 hover:scale-110 border bg-white border-gray-200 rounded-lg shadow-md">
                <div className="self-center ml-20 text-lg text-gray-900 w-1/2">
                  <div className="font-bold">San Isidro - 15/05/2021</div>
                  <div className="text-sm text-gray-500">
                  Es el Patrón de la ciudad de Madrid, los madrileños dedican toda clase de honores y tributos.
                  </div>
                </div>
                <div className="w-full md:flex md:items-center md:justify-start lg:inline-flex md:w-1/2">
                  <div className="self-center lg:pl-2 flex-shrink-0">
                    <img
                      className="h-36 w-full md:w-screen object-cover opacity-50 border rounded-xl md:rounded-full"
                      src="https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2021/02/05043726/sanisidro.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="md:flex md:justify-between transition duration-500 transform hover:-translate-y-1 hover:scale-110 border bg-white border-gray-200 rounded-lg shadow-md">
                <div className="self-center ml-20 text-lg text-gray-900 w-1/2">
                  <div className="font-bold">La Asunción de la Virgen - 15/08/2021</div>
                  <div className="text-sm text-gray-500">
                    Mítica fiesta en la que se llevan flores a la Virgen de la Asunción y la Virgen sale a la calle en procesión.
                  </div>
                </div>
                <div className="w-full md:flex md:items-center md:justify-start lg:inline-flex md:w-1/2">
                  <div className="self-center lg:pl-2 flex-shrink-0">
                    <img
                      className="h-36 w-full md:w-screen object-cover opacity-50 border rounded-xl md:rounded-full"
                      src="https://elcierredigital.com/images/carpeta_gestor/archivos/2019/08/14/fiesta2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="md:flex md:justify-between transition duration-500 transform hover:-translate-y-1 hover:scale-110 border bg-white border-gray-200 rounded-lg shadow-md">
                <div className="self-center ml-20 text-lg text-gray-900 w-1/2">
                  <div className="font-bold">Virgen de la Almudena - 09/11/2021</div>
                  <div className="text-sm text-gray-500">
                    Se celebra la fiesta de la Almudena desde 1908, cada año los 9 de noviembre es un día festivo en el que la Virgen sale en procesión.
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-start lg:inline-flex w-1/2">
                  <div className="self-center lg:pl-2 flex-shrink-0">
                    <img
                      className="h-36 w-full md:w-screen object-cover opacity-50 border rounded-xl md:rounded-full"
                      src="https://espanafascinante.com/wp-content/uploads/panoramica_fiestas_madrid_almudena.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CalendarFestivities;
