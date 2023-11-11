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
import ThemeToggler from "../theme-toggler";

const NavbarRight = ({ noSideBar, classes }) => {
  const { user } = useUser();
  const { isSignedIn } = useAuth();

  return (
    <div
      className={cn(
        "flex items-center sm:gap-x-4 gap-x-2 ml-auto",
        classes,
        noSideBar && "gap-x-4"
      )}
    >
      <div className={cn("sm:block hidden", noSideBar && "block")}>
        <ThemeToggler />
      </div>
      {isSignedIn ? (
        <>
          <ClerkLoading>
            <Skeleton className="h-10 w-10 rounded-full" />
          </ClerkLoading>
          <ClerkLoaded>
            <p
              className={cn(
                "sm:block hidden text-2xl  text-black/70 dark:text-white/90 font-semibold",
                noSideBar && "block"
              )}
            >
              {user?.fullName.length < 10 ? user?.fullName : user?.firstName}
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
              className="md:text-lg text-sm w-max font-bold text-black/70 dark:text-white/90 rounded-full"
            >
              Login
            </Button>
          </Link>
          <Link href={isSignedIn ? "" : "/sign-up"}>
            <Button
              variant="outline"
              className="relative md:text-lg text-sm w-max rounded-full bg-indigo-600 border-none font-bold text-white hover:bg-indigo-500 hover:text-white hover:scale-[103%] transition-all duration-250 shadow-lg"
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
