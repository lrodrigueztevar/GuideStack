import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import "moment/locale/es.js";

const localizer = momentLocalizer(moment);

const CalendarCity = () => {
  const [events] = useState([
    {
      start: "05/02/2021",
      end: "05/03/2021",
      title: "Día de la comunidad de Madrid",
    },
    {
      start: "05/15/2021",
      end: "05/16/2021",
      title: "San Isidro",
    },
    {
      start: "08/15/2021",
      end: "08/16/2021",
      title: "La Asunción de la Virgen",
    },
    {
      start: "11/09/2021",
      end: "11/10/2021",
      title: "Virgen de la Almudena",
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
