import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import RecommendedCarousel from "../components/RecommendedCarousel";
import UpcomingList from "../components/UpcomingList";

export default function Events() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RecommendedCarousel />
      <UpcomingList />
    </div>
  );
}
