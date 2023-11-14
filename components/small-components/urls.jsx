import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Spinner from "./spninner";

import UrlRow from "./url-row";

const URLs = ({ loading, urls }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell colSpan={1}>No.</TableCell>
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
          [...urls]
            .reverse()
            .map((url, index) => <UrlRow url={url} key={index} index={index} />)
        )}
      </TableBody>
    </Table>
  );
};

export default URLs;
