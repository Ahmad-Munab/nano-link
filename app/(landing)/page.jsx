import React from "react";

import Hero from "@/components/hero";
import URL_Container from "@/components/url-container";

const LandingPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Hero />
      <URL_Container />
    </div>
  );
};

export default LandingPage;
