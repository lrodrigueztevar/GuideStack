import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import "moment/locale/es.js";

const localizer = momentLocalizer(moment);

const CalendarCity = () => {
  const [events] = useState([
    {
      start: "05/22/2021",
      end: "05/25/2021",
      title: "El Rocío",
    },
    {
      start: "04/17/2021",
      end: "04/25/2021",
      title: "Semana Santa",
    },
    {
      start: "05/30/2021",
      end: "05/31/2021",
      title: "San Fernando",
    },
    {
      start: "06/02/2021",
      end: "06/03/2021",
      title: "Función votiva al cristo de San Agustín",
    },
    {
      start: "08/15/2021",
      end: "08/16/2021",
      title: "Virgen de los Reyes",
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
