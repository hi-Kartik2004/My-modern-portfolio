import Link from "next/link";
import { BsPersonFillDown } from "react-icons/bs";
import ContentHeader from "./ContentHeader";
import Navbar from "./Navbar";
import Bio from "./Bio";
import DoingElement from "./DoingElement";
import Testimonial from "./Testimonial";

const Content = () => {
  return (
    <div className="mt-7">
      <div className="read__layout flex border rounded-xl  section-color">
        <div className="content max-h-[90vh] px-7 py-4 relative overflow-auto">
          <ContentHeader />
          <Bio />
          <div className="mb-5">
            <h3 className="mt-12">What I'm Doing</h3>
            {/* <div className="divider"></div> */}
            <div className="wrapper flex flex-wrap justify-between">
              <DoingElement />
              <DoingElement />
              <DoingElement />
              <DoingElement />
            </div>
          </div>
          <div className="overflow-auto mb-7">
            <h3 className="mt-12">Testimonials</h3>

            <div className="w-full overflow-auto flex justify-between py-6">
              <Testimonial />
              <Testimonial />
              <Testimonial />
              <Testimonial />
            </div>
          </div>


          <div className="overflow-auto">
            <h3 className="mt-12">Days I Code...</h3>

            <div className="w-full overflow-auto flex justify-between py-6">
             
            </div>
          </div>




        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default Content;
