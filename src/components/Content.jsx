import Link from "next/link";
import { BsPersonFillDown } from "react-icons/bs";
import ContentHeader from "./ContentHeader";
import Navbar from "./Navbar";
import Bio from "./Bio";
import DoingElement from "./DoingElement";
import Testimonial from "./Testimonial";
import Resume from "./Resume";

const Content = () => {
  return (
    <div className="mt-5">
      <div className="read__layout flex border rounded-xl  section-color">
        <div></div>
        <div className="content max-h-[82vh] px-0 pt-4 relative overflow-auto">
          <div className="px-7">
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

              <div className="w-full overflow-auto flex justify-between py-6"></div>
            </div>
          </div>

          <Resume />
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default Content;
