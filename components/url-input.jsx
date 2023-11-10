"use client";

import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios from "axios"; // import axios library
import toast from "react-hot-toast"; // import react-hot-toast library
import { useUser } from "@clerk/nextjs";

const URL_Input = ({ setUrls }) => {
  const user = useUser();
  useEffect(() => {
    if (user.isSignedIn) {
      document
        .querySelector("#url-container")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [user.isSignedIn]);

  const urlInput = useRef();
  // create a function to handle the button click
  const onShorten = async () => {
    const urlValue = urlInput.current.value.trim();
    if (!urlValue) return toast.error("Enter a valid URL");

    try {
      // show a loading toast
      toast.loading("Shortening URL...");
      // send a POST request to the API endpoint with the url in the long field
      const response = await axios.post("/api/users/urls", { long: urlValue });
      // get the shortened url from the response data
      const { url } = response.data;
      setUrls((prev) => [...prev, url]);

      urlInput.current.value = "";

      // show a success toast with the shortened url
      toast.dismiss();
      toast.success(`URL Shortened`);
    } catch (error) {
      // show an error toast with the error message
      toast.dismiss();
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center md:gap-10 gap-6">
      <div className="flex sm:flex-row flex-col gap-3 w-full">
        <Input
          type="text"
          placeholder="Enter Long URL"
          ref={urlInput}
          className="text-white/90 shadow-xl"
        />
        <Button
          variant="outline"
          onClick={onShorten}
          className="bg-indigo-600 hover:bg-indigo-500 dark:text-white/90 text-white/90 shadow-xl"
        >
          Shorten
        </Button>
      </div>
    </div>
  );
};

export default URL_Input;
