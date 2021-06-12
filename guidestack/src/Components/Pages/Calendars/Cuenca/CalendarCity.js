import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import "moment/locale/es.js";

const localizer = momentLocalizer(moment);

const CalendarCity = () => {
  const [events] = useState([
    {
      start: "03/28/2021",
      end: "04/05/2021",
      title: "Procesión camino del Calvario y las Turbas",
    },
    {
      start: "04/11/2021",
      end: "04/18/2021",
      title: "Semana de la música religiosa",
    },
    {
      start: "01/28/2021",
      end: "01/29/2021",
      title: "San Julián",
    },
    {
      start: "09/18/2021",
      end: "09/22/2021",
      title: "San Mateo",
    },
    {
      start: "06/01/2021",
      end: "06/02/2021",
      title: "Virgen de la luz",
    },
  ]);

  return (
    <div className="flex justify-center">
      <div className="md:h-xlg md:w-11/12 py-6">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
        />
      </div>
    </div>
  );
};

export default CalendarCity;
