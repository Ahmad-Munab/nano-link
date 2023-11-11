"use client";

import { useEffect, useState } from "react";
import URLs from "./small-components/urls";
import URL_Input from "./url-input";
import axios from "axios";

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
        if (error?.response?.status === "401") {
          return setUrls([]);
        }
        console.error(error);
      }

      setLoading(false);
    };

    fetchUrls();
  }, [setLoading, setUrls]);

  return (
    <div
      id="url-container"
      className="xl:mx-[25%] md:mx-[10%] mx-4 xl:py-24 py-10 flex flex-col justify-center items-center md:gap-10 gap-6"
    >
      <div className="flex flex-col gap-3">
        {" "}
        <h1 className="text-center md:text-5xl text-4xl font-bold dark:text-white/90 text-[#2e313a]">
          Shorten Links
        </h1>
        <div className="mx-auto rounded-xl w-[7rem] h-[6px] bg-indigo-700"></div>
      </div>
      <URL_Input setUrls={setUrls} />
      <URLs
        loading={loading}
        setLoading={setLoading}
        urls={urls}
        setUrls={setUrls}
      />
    </div>
  );
};

export default URL_Container;
