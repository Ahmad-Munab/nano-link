"use client";

import { TableRow, TableCell } from "@/components/ui/table";

import { CopyIcon } from "lucide-react";
import toast from "react-hot-toast";
import Spinner from "./spninner";

const UrlRow = ({ url, index }) => {
  return !url ? (
    <TableRow className="w-full">
      <TableCell colSpan={1}>{index + 1}</TableCell>
      <TableCell colSpan={11} className="w-full">
        <Spinner size={"h-10 w-10 border-4 mx-auto"} />
      </TableCell>
    </TableRow>
  ) : (
    <TableRow key={index} className="w-full">
      <TableCell colSpan={1}>{index + 1}</TableCell>
      <TableCell colSpan={7} className="overflow-ellipsis">
        {url.long.length > 40 ? `${url?.long.slice(0, 40)}...` : url?.long}
      </TableCell>

      <TableCell colSpan={3}>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(
              `${process.env.NEXT_PUBLIC_HOST_URL}/${url?.short}`
            );
            toast.success("Copied!");
          }}
        >
          {process.env.NEXT_PUBLIC_HOST_DOMAIN}/{url?.short}
          <CopyIcon className="ml-3 w-6 h-6" />
        </div>
      </TableCell>

      <TableCell colSpan={1}>{url?.clicks}</TableCell>
    </TableRow>
  );
};

export default UrlRow;
