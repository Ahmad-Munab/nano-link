import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Spinner from "./spninner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { CopyIcon } from "lucide-react";
import toast from "react-hot-toast";

const URLs = ({ loading, urls }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell colSpan={1}>No</TableCell>
          <TableCell colSpan={7}>Long</TableCell>
          <TableCell colSpan={3}>Short</TableCell>
          <TableCell colSpan={1}>Clicks</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          <TableRow className="w-full">
            <TableCell colSpan={12} className="w-full">
              <Spinner size={"h-10 w-10 border-4 mx-auto"} />
            </TableCell>
          </TableRow>
        ) : urls.length === 0 ? (
          <TableRow className="w-full">
            <TableCell colSpan={12} className="text-center">
              No URLs found
            </TableCell>
          </TableRow>
        ) : (
          urls.map((url, index) => (
            <TableRow key={index}>
              <TableCell colSpan={1}>{index + 1}</TableCell>
              <TableCell colSpan={7} className="overflow-ellipsis">
                {url.long.length > 40
                  ? `${url.long.slice(0, 40)}...`
                  : url.long}
              </TableCell>
              <TooltipProvider>
                <Tooltip defaultOpen={true}>
                  <TableCell colSpan={3}>
                    <TooltipTrigger>
                      <div
                        className="flex items-center cursor-pointer"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `${process.env.NEXT_PUBLIC_HOST_URL}/${url.short}`
                          );
                          toast.success("Copied!");
                        }}
                      >
                        {url.short}
                        <CopyIcon className="ml-3 w-6 h-6" />
                      </div>
                    </TooltipTrigger>
                  </TableCell>

                  <TooltipContent className="z-10">
                    <div className="flex items-center text-green-400">
                      Click to Copy
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TableCell colSpan={1}>{url.clicks}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default URLs;
