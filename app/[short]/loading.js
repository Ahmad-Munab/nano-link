import Spinner from "@/components/small-components/spninner";

const Loading = () => {
  return (
    <div className="w-screen h-screen p-0 m-0 z-10 flex flex-col gap-6 justify-center items-center">
      <Spinner />
      <h1 className="lg:text-6xl sm:text-5xl text-4xl text-white/90 text-center font-bold">
        Redirecting...
      </h1>
    </div>
  );
};

export default Loading;
