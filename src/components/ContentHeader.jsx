import Link from "next/link";
import React from "react";

const ContentHeader = () => {
  return (
    <div className="content__header flex justify-between gap-2 w-full">
      <div className="heading">
        <h2>About Me</h2>
        <div className="divider"></div>
      </div>

      <div className="internal-links max-h-[2.5rem] px-4 py-2 flex gap-4 rounded-bl-xl border image-bg-color absolute top-0 right-0">
        <Link href="" className="internal-link">
          Bio
        </Link>
        <Link href="" className="internal-link">
          What I do
        </Link>
        <Link href="" className="internal-link">
          Testimonials
        </Link>
        <Link href="" className="internal-link">
          My Days
        </Link>
        {/* <Link href=''>Projects</Link> */}
      </div>
    </div>
  );
};

export default ContentHeader;
