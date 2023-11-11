import { cn } from "@/lib/utils";

const Spinner = ({ size }) => {
  return (
    <div
      className={cn(
        "border-gray-300 animate-spin rounded-full border-t-blue-600",
        size
      )}
    ></div>
  );
};

export default Spinner;
