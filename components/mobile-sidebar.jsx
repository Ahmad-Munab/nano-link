import React, { useEffect, useState } from "react";
import { AlignRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
                <div className="lg:hidden">
                    <ButtonWrapper>
                        <AlignRight width={30} height={30} />
                    </ButtonWrapper>
                </div>
            </SheetTrigger>
            <SheetContent side="right" className="m-0 p-0">
                <Sidebar setOpen={setOpen}/>
            </SheetContent>
        </Sheet>
    );
};

const ButtonWrapper = ({ children }) => (
    <button className="bg-transparent p-0 m-0 border-none cursor-pointer">
        {children}
    </button>
);

export default MobileSidebar;
