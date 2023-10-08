"use client";
import { useState } from "react";
import ContentHeader from "./ContentHeader";
import TimelineSection from "./TimelineSection";

const Resume = () => {
    const [showResume, setShowResume] = useState(true);
    const toggleResume = () => {
        setShowResume(!showResume);
    };

  return (
    <>
      <div className={`bg-color rounded-xl rounded-b-none border ${(showResume) ? 'sticky' : 'fixed max-w-[1300px] left-[50%] -translate-x-[50%] top-4 overflow-auto'} -bottom-1 left-0 w-full ${showResume ? 'max-h-[45px] overflow-hidden' : ''}`}>
        <div className="toggleBtn px-4 py-2 border flex justify-between w-full">
          <button className="resume__btn" onClick={toggleResume}>{(showResume) ? "Show Resume" : "Hide Resume"}</button>

          <a href="/" target="_blank" className="resume__btn flex justify-center items-center"><span>Download Paper Resume</span></a>
        </div>
        <section className="flex items-center justify-center flex-col w-full overflow-auto px-5 py-2">
          <div className="container relative mt-2">
            <div className="mt-0">
              <ContentHeader />
            </div>
            <TimelineSection />
            <TimelineSection />
            <TimelineSection />
            <TimelineSection />
          </div>
        </section>
      </div>
    </>
  );
};

export default Resume;
