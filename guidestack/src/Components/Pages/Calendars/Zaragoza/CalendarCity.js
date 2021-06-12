import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import "moment/locale/es.js";

const localizer = momentLocalizer(moment);

const CalendarCity = () => {
  const [events] = useState([
    {
      start: "01/29/2021",
      end: "01/30/2021",
      title: "San Valero",
    },
    {
      start: "03/05/2021",
      end: "03/06/2021",
      title: "La Cincomarzada",
    },
    {
      start: "10/09/2021",
      end: "10/18/2021",
      title: "Fiestas del Pilar",
    },
    {
      start: "04/23/2021",
      end: "04/24/2021",
      title: "San Jorge",
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
