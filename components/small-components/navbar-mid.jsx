import { Button } from "../ui/button";

const NavbarMid = () => {
    return (
        <div className="lg:flex hidden items-center gap-x-2 ">
            <Button
                onClick={() => {
                    document
                        .querySelector("#features")
                        .scrollIntoView({ behavior: "smooth" });
                }}
                variant="ghost"
                className="md:text-lg text-sm w-max font-bold text-black/70 dark:text-white/90 rounded-full"
            >
                Features
            </Button>

            <Button
                onClick={() => {
                    console.log("Will ad contact us modal");
                }}
                variant="ghost"
                className="md:text-lg text-sm w-max font-bold text-black/70 dark:text-white/90 rounded-full"
            >
                Contact Us
            </Button>

            <Button
                onClick={() => {
                    document
                        .querySelector("#testimonials")
                        .scrollIntoView({ behavior: "smooth" });
                }}
                variant="ghost"
                className="md:text-lg text-sm w-max font-bold text-black/70 dark:text-white/90 rounded-full"
            >
                About
            </Button>
        </div>
    );
};

export default NavbarMid;
