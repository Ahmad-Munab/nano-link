import FeaturesSection from "@/components/features-section";
import Hero from "@/components/hero";
import URL_Container from "@/components/url-container";
import { Suspense } from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-max flex flex-col">
      <Hero />
      <Suspense>
        <URL_Container />
      </Suspense>
      <FeaturesSection/>
    </div>
  );
};

export default LandingPage;
