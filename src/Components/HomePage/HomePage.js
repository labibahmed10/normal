import React from "react";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import ReviewSection from "../ExtraSection/ReviewSection";
import MyService from "../MyService/MyService";
import "./Homepage.css";

const HomePage = () => {
  return (
    <div>
      {/* top static banner added here */}
      <Banner></Banner>
      {/* special service section added here */}
      <MyService></MyService>
      {/* extra section added */}
      <ExtraSection></ExtraSection>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default HomePage;
