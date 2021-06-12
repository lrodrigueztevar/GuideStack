import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import "moment/locale/es.js";

const localizer = momentLocalizer(moment);

const CalendarCity = () => {
  const [events] = useState([
    {
      start: "08/15/2021",
      end: "08/24/2021",
      title: "Feria de Málaga",
    },
    {
      start: "04/17/2021",
      end: "04/24/2021",
      title: "Semana Santa",
    },
    {
      start: "06/23/2021",
      end: "06/24/2021",
      title: "Noche de San Juan",
    },
    {
      start: "07/16/2021",
      end: "07/17/2021",
      title: "La virgen del Carmen",
    },
    {
      start: "02/03/2021",
      end: "02/27/2021",
      title: "Carnaval de Málaga",
    },
  ]);

  return (
    <div className="flex justify-center">
      <div className="h-xlg w-11/12 py-6">
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
