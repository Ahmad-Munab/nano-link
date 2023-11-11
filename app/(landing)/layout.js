import Footer from "@/components/footer";
import Navabar from "@/components/navbar";
import React from "react";

const LandingLayout = ({ children }) => {
  return (
    <main className=" bg-background dark:bg-gray-950 p-0 m-0 h-full w-full flex flex-col overflow-x-hidden">
      {/* <div className="absolute top-[-10%] left-[-10%] rounded-full bg-blue-600 w-[20rem] h-[20rem]"></div> */}
      <Navabar />
      {children}
      <Footer />
    </main>
  );
};

export default LandingLayout;
