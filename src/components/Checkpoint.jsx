import React from "react";

const Checkpoint = () => {
  return (
    <div className="checkpoint ml-4 relative">
      <div className="outer-circle w-3 h-3 yellow-color rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"></div>
      <div className="inner-circle w-7 h-7 image-bg-color border rounded-full"></div>
    </div>
  );
};

export default Checkpoint;
