import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import "moment/locale/es.js";

const localizer = momentLocalizer(moment);

const CalendarCity = () => {
  const [events] = useState([
    {
      start: "03/15/2021",
      end: "03/20/2021",
      title: "Fallas",
    },
    {
      start: "05/12/2021",
      end: "05/13/2021",
      title: "Virgen de los desamparados",
    },
    {
      start: "06/11/2021",
      end: "06/15/2021",
      title: "Corpus Christi",
    },
    {
      start: "07/01/2021",
      end: "07/15/2021",
      title: "Gran fira de Valencia",
    },
    {
      start: "10/09/2021",
      end: "10/10/2021",
      title: "Dia de la Comunitat",
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
