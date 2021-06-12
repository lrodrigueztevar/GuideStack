import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import CalendarWelcome from "./CalendarWelcome";
import CalendarCity from "./CalendarCity";
import CalendarFestivities from "./CalendarFestivities";

const SevillaCalendar = () => {
  return (
    <>
      <Header />
      <CalendarWelcome />
      <CalendarFestivities />
      <CalendarCity />
      <Footer />
    </>
  );
};
export default SevillaCalendar;
