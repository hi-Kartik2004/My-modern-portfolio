import { SiHtml5 } from "react-icons/si";
import Social from "./Social";

const Sidebar = () => {
  return <div className="left max-w-[250px] w-full section-color flex flex-col p-5 rounded-xl border">
    <div className="flex flex-col items-center ">
      <img src="https://avatars.githubusercontent.com/u/111000515?v=4" alt="picture" className="w-[150px] h-[150px] rounded-xl shadow-md shadow-black" />
    </div>

    <div className="heading w-full flex items-center flex-col mt-3">
      <h3>Kartikeya Saini</h3>
      <div className="tags mt-2">
        <div className="rounded-xl bg-color px-2 py-1">
          <span className=" text-sm">Full Stack Web Developer</span>
        </div>
        <div className="rounded-xl bg-color px-2 py-1 mt-2">
          <span className="text-sm">3<sup>rd</sup> year Student at UVCE</span>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center">
      <div className="divider my-5"></div>
    </div>

    <div className="socials mt-10 gap-10 flex justify-start items-start flex-col ">
      <Social />
      <Social />
      <Social />
      <Social />
    </div>


  </div>;
};

export default Sidebar;
