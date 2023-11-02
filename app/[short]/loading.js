const Loading = () => {
  return (
    <div className="w-screen h-screen p-0 m-0 z-10 flex flex-col gap-6 justify-center items-center dark:bg-slate-200">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600"></div>
      <h1 className="lg:text-6xl sm:text-5xl text-4xl text-white/90 text-center font-bold">
        Redirecting...
      </h1>
    </div>
  );
};

export default Loading;
