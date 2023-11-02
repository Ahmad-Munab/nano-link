"use client";

import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios from "axios"; // import axios library
import toast from "react-hot-toast"; // import react-hot-toast library

const URL_Container = () => {
  const urlInput = useRef();
  // create a function to handle the button click
  const onShorten = async () => {
    const url = urlInput.current.value?.trim();
    if (!url || url == "") return;

    console.log(url);
    return;

    try {
      // show a loading toast
      toast.loading("Shortening URL...");
      // send a POST request to the API endpoint with the url in the long field
      const response = await axios.post("/api/users/urls", { long: url });
      // get the shortened url from the response data
      const shortUrl = response.data.short;
      // show a success toast with the shortened url
      toast.success(`Shortened URL: ${shortUrl}`);
    } catch (error) {
      // show an error toast with the error message
      toast.error(error.message);
    }
  };

  return (
    <div className="xl:mx-[25%] md:mx-[10%] mx-4 xl:py-28 py-16 flex flex-col justify-center items-center md:gap-10 gap-6">
      <div className="flex md:flex-row flex-col w-full">
        <Input
          type="text"
          placeholder="Enter Long URL"
          ref={urlInput}
          className="text-white"
        />
        <Button variant="primary" onClick={onShorten}>
          Shorten
        </Button>
      </div>
    </div>
  );
};

export default URL_Container;
