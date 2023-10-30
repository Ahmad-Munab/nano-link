import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const blurVariants = cva("absolute bg-gradient-to-r rounded-full", {
  variants: {
    color: {
      primary: "from-indigo-800 to-purple-800",
      success: "from-green-800 to-green-500",
    },
    size: {
      sm: "dark:-inset-0.5 blur-md",
      md: "dark:-inset-1 blur-xl",
      lg: "dark:-inset-2 blur-2xl",
    },
  },
  defaultVariants: { color: "primary", size: "md" },
});

const Blur = ({ className, children, color, size }) => {
  return (
    <div className="relative">
      <div className={cn(blurVariants({ color, size, className }))}></div>
      {children}
    </div>
  );
};

export default Blur;
