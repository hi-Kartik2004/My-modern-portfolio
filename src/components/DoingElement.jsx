import React from "react";
import { BsPersonFillDown } from "react-icons/bs";

const DoingElement = () => {
  return (
    
      <div className="doing-ele mt-4 flex gap-5 max-w-[400px] px-4 py-4 card-color border rounded-xl shadow-md shadow-black">
        <div >
          <BsPersonFillDown className="logo" />
        </div>

        <div className="">
          <h4 className="mb-2">Lorem ipsum dolor</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            provident autem eaque?
          </p>
        </div>
      </div>
  );
};

export default DoingElement;
