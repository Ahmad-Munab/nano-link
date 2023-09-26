import LandingFooter from "@/components/landing-footer";
import LandingNavabar from "@/components/landing-navbar";
import React from "react";

const LandingLayout = ({ children }) => {
    return (
        <main className=" bg-[#111827] p-0 m-0 h-full w-full flex flex-col">
            <LandingNavabar />
            {children}
            <LandingFooter />
        </main>
    );
};

export default LandingLayout;
