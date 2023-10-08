import React from "react";
import Checkpoint from "./Checkpoint";
import TimelineContent from "./TimelineContent";

const TimelineElement = () => {
  return (
    <div className="timeline__ele flex items-start">
      <div className="timeline__left">
        <Checkpoint />
      </div>

      <div className="timeline__right ml-10">
        <TimelineContent />
      </div>
    </div>
  );
};

export default TimelineElement;
