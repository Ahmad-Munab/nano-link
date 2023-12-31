import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nano Link",
  description: "An Everyday URL Shortener",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <html lang="en">
        <body className={cn(inter.className, "h-screen w-screen p-0 m-0")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
