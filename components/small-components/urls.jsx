import URLCard from "./url-card";
import Spinner from "./spninner";

const URLs = ({ loading, urls }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full">
      <div className="flex justify-between border rounded-xl rounded-bl-none rounded-br-none dark:bg-inherit bg-slate-200 p-4 pb-3 gap-4 w-full">
        <p>No</p>
        <h1 className="max-w-2xl overflow-clip">Long</h1>
        <h1>Short</h1>
        <p>Clicks</p>
      </div>
      {loading ? (
        <Spinner />
      ) : urls.length === 0 ? (
        "No URLs found"
      ) : (
        urls.map((url, index) => (
          <URLCard key={index} index={index} url={url} />
        ))
      )}
    </div>
  );
};

export default URLs;
