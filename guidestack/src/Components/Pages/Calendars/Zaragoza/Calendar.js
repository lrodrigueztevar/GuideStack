import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import CalendarWelcome from "./CalendarWelcome";
import CalendarCity from "./CalendarCity";
import CalendarFestivities from "./CalendarFestivities";

const ZaragozaCalendar = () => {
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
export default ZaragozaCalendar;
