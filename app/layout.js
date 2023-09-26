import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Munab.AI",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <html lang="en">
                <body
                    className={cn(inter.className, "h-screen w-screen p-0 m-0")}
                >
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
