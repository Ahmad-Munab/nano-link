"use client";

import { Suspense, useEffect, useState } from "react";
import URLs from "./small-components/urls";
import URL_Input from "./url-input";

const URL_Container = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await axios.get("/api/users/urls");
        const { urls } = response.data;
        setUrls(urls);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    fetchUrls();
  }, []);

  return (
    <div
      id="url-container"
      className="xl:mx-[25%] md:mx-[10%] mx-4 xl:py-28 py-16 flex flex-col justify-center items-center md:gap-10 gap-6"
    >
      <div className="flex flex-col gap-3">
        {" "}
        <h1 className="text-center md:text-5xl text-4xl font-bold dark:text-white/90 text-[#2e313a]">
          Shorten Links
        </h1>
        <div className="mx-auto rounded-xl w-[7rem] h-[6px] bg-indigo-700"></div>
      </div>
      <URL_Input setUrls={setUrls} />
      <Suspense>
        <URLs loading={loading} urls={urls} />
      </Suspense>
    </div>
  );
};

export default URL_Container;
