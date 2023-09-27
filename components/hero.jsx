"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
    const { isSignedIn } = useAuth();

    <TypewriterComponent
        options={{
            strings: [
                "Chatbot.",
                "Image Generation.",
                "Blog Writing.",
                "Mail Writing.",
            ],
            autoStart: true,
            loop: true,
        }}
    />;

    return (
        <heading className="xl:ms-[17%] md:ms-[7%] mx-4 xl:py-28 py-16 flex xl:flex-row flex-col-reverse xl:justify-start justify-center items-center xl:gap-0 gap-10">
            <section className="flex flex-col gap-6 text-start xl:w-[40%] w-full ">
                <h1 className="text-5xl md:text-7xl   font-extrabold text-[#393b42]">
                    More than just shorter links
                </h1>

                <article className="text-lg md:text-xl font-light text-zinc-400">
                    Shorten links using NanoLink super fast. NanoLink is a{" "}
                    <br />
                    oneclick paste and copy URL shortener <br /> which alows you
                    to shorten links lighting fast
                </article>

                <Link
                    href={isSignedIn ? "" : "/sign-up"}
                    className="flex flex-col gap-3 w-max justify-center items-start mt-4"
                >
                    <Button
                        varient="outline"
                        className="md:text-lg text-md p-4 md:p-6 rounded-full font-semibold bg-indigo-700 hover:bg-indigo-500  hover:scale-[102%] transition-all duration-150 shadow-lg"
                    >
                        Start Shortening For Free
                    </Button>
                    <p className=" text-black/70 text-xs md:text-sm font-normal ml-2">
                        No credit card required.
                    </p>
                </Link>
            </section>
            <section className="flex flex-col gap-6 xl:w-[50%]  xl:px-0 sm:px-28 px-0 w-full justify-center items-center ">
                <div className="relative">
                    <Image
                        src="/images/hero.png"
                        alt="Coding Boy"
                        width={600} 
                        height={600}
                        layout="responsive"
                    />
                </div>
            </section>
        </heading>
    );
};

export default Hero;
