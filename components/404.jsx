import Link from "next/link";

const NotFound404 = () => {
    return (
        <div class="w-screen h-screen z-10 flex flex-col items-center justify-center  bg-background dark:bg-gray-950">
            <div class="flex items-center justify-center min-h-screen  py-48">
                <div class="flex flex-col">
                    <div class="flex flex-col items-center">
                        <div class="text-indigo-500 font-bold text-7xl">
                            404
                        </div>

                        <div class="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10 text-[#393b42] dark:text-white/90">
                            This page does not exist
                        </div>

                        <div class="text-muted-foreground dark:text-white/70 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                            The page you are looking for could not be found.
                        </div>
                        <Link
                            href={"/"}
                            className="text-xl hover:underline text-blue-500 mt-4"
                        >
                            Continue to Home page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound404;