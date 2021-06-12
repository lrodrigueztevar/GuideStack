import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import "moment/locale/es.js";

const localizer = momentLocalizer(moment);

const CalendarCity = () => {
  const [events] = useState([
    {
      start: "09/23/2021",
      end: "09/27/2021",
      title: "La Mercé",
    },
    {
      start: "09/11/2021",
      end: "09/12/2021",
      title: "Diada de Catalunya",
    },
    {
      start: "04/23/2021",
      end: "04/24/2021",
      title: "Sant Jordi",
    },
    {
      start: "08/14/2021",
      end: "08/23/2021",
      title: "Festa Major de Gràcia",
    },
    {
      start: "08/20/2021",
      end: "08/30/2021",
      title: "Festa Major de Sants",
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
