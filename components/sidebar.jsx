"use client";

import React from "react";
import NavbarRight from "./small-components/navbar-right";

const Sidebar = ({ setOpen }) => {
  return (
    <div className="space-y-1 pt-12 flex flex-col h-full gap-3 text-[#111827]">
      <NavbarRight noSideBar={true} classes="mx-auto" />
      <hr />
      <div
        onClick={() => {
          setOpen(false);
          document
            .querySelector("#features")
            .scrollIntoView({ behavior: "smooth" });
        }}
        className=" space-y-2 py-4 px-2 rounded-lg mx-2 hover:bg-gray-50 hover:dark:bg-gray-900 transition-all ease-in-out duration-200"
      >
        <span className="md:text-xl text-lg text-center flex items-center gap-2 font-bold text-black/70 dark:text-white/90">
          Features
        </span>
        <hr />
      </div>

      <div
        onClick={() => {
          setOpen(false);
          document
            .querySelector("#about")
            .scrollIntoView({ behavior: "smooth" });
        }}
        className=" space-y-2 py-4 px-2 rounded-lg mx-2 hover:bg-gray-50 hover:dark:bg-gray-900 transition-all ease-in-out duration-200"
      >
        <span className="md:text-xl text-lg text-center flex items-center gap-2 font-bold text-black/70 dark:text-white/90">
          About
        </span>
        <hr />
      </div>

      <div
        onClick={() => {
          setOpen(false);
          console.log("Open modal here...");
        }}
        className=" space-y-2 py-4 px-2 rounded-lg mx-2 hover:bg-gray-50 hover:dark:bg-gray-900 transition-all ease-in-out duration-200"
      >
        <span className="md:text-xl text-lg text-center flex items-center gap-2 font-bold text-black/70 dark:text-white/90">
          Contact Us
        </span>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
