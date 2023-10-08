import React from "react";
import { BsPersonFillDown } from "react-icons/bs";

const Testimonial = () => {
  return (
    <div className="testimonial mt-[2.5rem] flex min-w-[400px] w-full px-4 py-4 card-color border rounded-xl relative">
      <div className="testmonial-logo absolute -top-[40px] left-2 rounded-xl">
        {/* <h1 className="gradient">Lorem.</h1> */}
        <BsPersonFillDown className="" />
      </div>

      <div className="w-full">
        <h4 className="mb-2 ml-[75px]">Lorem ipsum dolor</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          provident autem eaque?
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
