"use client";

const URLCard = ({ url, index }) => {
  return (
    <div className="flex justify-between border rounded-xl dark:bg-inherit bg-slate-200 p-4 gap-4 w-full">
      <p>{index + 1}</p>
      <h1 className="max-w-2xl overflow-clip">{url.long}</h1>
      <h1>{url.short}</h1>
      <p>{url.clicks}</p>
    </div>
  );
};

export default URLCard;
