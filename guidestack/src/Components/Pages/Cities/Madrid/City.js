import React from "react";
import CityCulture from "./CityCulture";
import CityMap from "./CityMap";
import CityWelcome from "./CityWelcome";
import Footer from "../../Footer";
import Header from "../../Header";
import CityTransport from "./CityTransport";

const MadridCity = () => {
  return (
    <>
      <Header />
      <CityWelcome />
      <CityCulture />
      <CityTransport/>
      <CityMap />
      <Footer />
    </>
  );
};
export default MadridCity;
