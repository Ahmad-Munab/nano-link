import {
    ClerkLoaded,
    ClerkLoading,
    UserButton,
    useAuth,
    useUser,
} from "@clerk/nextjs";
import { Skeleton } from "../ui/skeleton";
import MobileSidebar from "../mobile-sidebar";

import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavbarRight = ({ noSideBar, classes }) => {
    const { user } = useUser();
    const { isSignedIn } = useAuth();

    return (
        <div className={cn("flex items-center gap-x-4 ml-auto", classes)}>
            {isSignedIn ? (
                <>
                    <ClerkLoading>
                        <Skeleton className="h-10 w-10 rounded-full" />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <p className="md:block hidden text-2xl  text-black/70 font-semibold">
                            {user?.fullName}
                        </p>
                        <UserButton />
                    </ClerkLoaded>
                </>
            ) : (
                <>
                    <Link
                        href="/sign-in"
                        className={cn("lg:block hidden", noSideBar && "block")}
                    >
                        <Button
                            variant="outline"
                            className="md:text-lg text-sm w-max font-bold text-black/70 rounded-full"
                        >
                            Login
                        </Button>
                    </Link>
                    <Link href={isSignedIn ? "" : "/sign-up"}>
                        <Button
                            variant="outline"
                            className="md:text-lg text-sm w-max rounded-full bg-indigo-600 border-none font-bold text-white hover:bg-indigo-500 hover:text-white hover:scale-[103%] transition-all duration-250 shadow-lg"
                        >
                            Get Started
                        </Button>
                    </Link>
                </>
            )}

            {!noSideBar && <MobileSidebar />}
        </div>
    );
};

export default NavbarRight;
