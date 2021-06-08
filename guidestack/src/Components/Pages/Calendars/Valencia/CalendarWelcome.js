const CalendarWelcome = () => {
  return (
    <div className="relative bg-cyan-900">
      <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-50 xl:absolute xl:inset-0"
              src="https://cadenaser00.epimg.net/ser/imagenes/2020/05/07/radio_valencia/1588839987_534179_1588840836_noticia_normal.jpg"
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent uppercase">
            Comunitat Valenciana
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            Las festividades de València
          </p>
          <p className="mt-5 text-lg text-gray-300">
          En València se viven diversas fiestas populares, de índole religioso o profano, en las que se mezcla el rito y el ingenio, la pólvora y la música,
          la fiesta más conocida ya que es patrimonio de la humanidad son las Fallas.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CalendarWelcome;
