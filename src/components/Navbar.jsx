import Link from "next/link";
import React from "react";
import {BsPersonFillDown} from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar flex flex-col gap-4 px-2 py-7 card-color items-center border rounded-tr-xl rounded-br-xl">
      <Link href="" className="navlink p-2 rounded-xl">
        <BsPersonFillDown />
      </Link>
      <Link href="" className="navlink p-2 rounded-xl">
        <BsPersonFillDown />
      </Link>
      <Link href="" className="navlink p-2 rounded-xl">
        <BsPersonFillDown />
      </Link>
      <Link href="" className="navlink p-2 rounded-xl">
        <BsPersonFillDown />
      </Link>
    </div>
  );
};

export default Navbar;
