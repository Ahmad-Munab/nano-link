"use client";

import React from "react";
import Link from "next/link";
import NavbarRight from "./small-components/navbar-right";
import { CircleDollarSign, Star } from "lucide-react";

const Sidebar = ({ setOpen }) => {
    console.log("CLicked ----------------------");
    return (
        <div className="space-y-1 pt-12 flex flex-col h-full gap-3 text-[#111827]">
            <NavbarRight noSideBar={true} classes="mx-auto" />
            <hr />
            <div
                onClick={() => {
                    console.log("CLicked ----------------------");
                    setOpen(false);
                    document
                        .querySelector("#features")
                        .scrollIntoView({ behavior: "smooth" });
                }}
                className=" space-y-2 py-4 px-2 rounded-lg mx-2 hover:bg-gray-50 transition-all ease-in-out duration-200"
            >
                <span className="md:text-xl text-lg text-center flex items-center gap-2 font-bold text-black/70 dark:text-white/90">
                    <Star />
                    Features
                </span>
                <hr />
            </div>

            <Link
                href="/pricing"
                onClick={() => setOpen(false)}
                className=" space-y-2 py-4 px-2 rounded-lg mx-2 hover:bg-gray-50 transition-all ease-in-out duration-200"
            >
                <span className="md:text-xl text-lg text-center flex items-center gap-2 font-bold text-black/70 dark:text-white/90">
                    <CircleDollarSign />
                    Pricing
                </span>
                <hr />
            </Link>

            <div
                onClick={() => {
                    console.log("CLicked ----------------------");
                    setOpen(false);
                    document
                        .querySelector("#features")
                        .scrollIntoView({ behavior: "smooth" });
                }}
                className=" space-y-2 py-4 px-2 rounded-lg mx-2 hover:bg-gray-50 transition-all ease-in-out duration-200"
            >
                <span className="md:text-xl text-lg text-center flex items-center gap-2 font-bold text-black/70 dark:text-white/90">
                    About
                </span>
                <hr />
            </div>
        </div>
    );
};

export default Sidebar;
