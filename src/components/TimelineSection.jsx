import React from "react";
import TimelineElement from "./TimelineElement";
import TimelineLogo from "./TimelineLogo";

const TimelineSection = () => {
  return (
    <div className="resume__section mt-10 flex flex-col">
      <div className="section__heading__wrapper mb-10 flex items-center">
        <TimelineLogo />
        <div className="resume__heading ml-5">
          <h4>Lorem, ipsum.</h4>
        </div>
      </div>

      <TimelineElement />
      <TimelineElement />
      <TimelineElement />
    </div>
  );
};

export default TimelineSection;
