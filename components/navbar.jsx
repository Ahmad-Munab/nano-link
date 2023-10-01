"use client";

import { cn } from "@/lib/utils";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import React from "react";
import NavbarRight from "./small-components/navbar-right";
import NavbarMid from "./small-components/navbar-mid";

const font = Montserrat({
    weight: "700",
    subsets: ["latin"],
});

const Navabar = () => {
    return (
        <nav className="py-4 md:px-0 px-4  bg-transparent flex items-center justify-start gap-6 xl:mx-[17%] md:mx-[7%] mx-2">
            <div className="flex items-center gap-x-2">
                <Link
                    href="/"
                    className={cn(
                        "md:text-4xl text-3xl text-[#393b42] dark:text-white/90",
                        font.className
                    )}
                >
                    NanoLink
                </Link>
            </div>
            <NavbarMid />
            <NavbarRight />
        </nav>
    );
};

export default Navabar;
