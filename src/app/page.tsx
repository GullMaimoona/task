import React from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

import FeatureItem from "./components/FeatureItem.jsx";
import { featuresList } from "./data";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden w-full">
        <svg
          className="ven-info__svg object-fit"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="685"
          viewBox="0 0 1920 685"
          fill="none"
        >
          <path d="M1920 -254H0V685L1920 555.689V-254Z" fill="#372656" />
        </svg>
      </div>

      <h1 className="-mt-[600px] px-52 italic text-purple-400 text-center text-4xl font-semibold">
        pixel <span className="font-thin italic">law</span>
      </h1>

      <div className="flex">
        <div className="ml-20 mt-24 flex flex-col md:flex-row md:justify-center md:items-start items-center justify-start gap-4">
          <div className="p-4">
            <h3 className="text-white italic text-5xl font-semibold">
              Free Guide
            </h3>
            <h3 className="text-white text-5xl font-semibold mt-16">
              The Lawyer&#39;s Guide to Entrepreneurship
            </h3>
            <p className="text-white text-xl font-thin mt-7">
              Maximize your success with the right legal foundation.
            </p>
            <button className="mt-7 bg-purple-500 px-4 py-2 text-white rounded-full text-lg font-medium hover:bg-[#372656]">
              Download Now
            </button>
          </div>

          <div className="mr-24">
            <Image src="/pic.webp" alt="Panaverse" width={510} height={612} />
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-28 mt-40 justify-center items-center flex-wrap">
        {featuresList.map((feature, index) => {
          return <FeatureItem feature={feature} key={index} />;
        })}
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className=" shadow-2xl w-[75%] bg-white  m-auto h-[60%]  rounded-3xl mt-64 z-50">
          <h3 className="text-2xl font-medium ml-14 mt-7 py-12">
            Free Guide: The Lawyer&#39;s Guide to Entrepreneurship
          </h3>
          <p className="ml-14 -mt-5 text-lg text-black/60">
            Maximize your success with the right legal foundation.
          </p>
          <div className="flex flex-row mt-16 ml-6">
            <Image src="/pic.webp" alt="Panaverse" width={250} height={150} />
            <div className="flex flex-col space-y-4">
              <p className="ml-1 text-lg  text-black/60 inline-flex items-center space-x-4">
                <span className="text-purple-400">
                  <AiOutlinePlus />
                </span>
                <span>LLCs v. Corporations</span>
              </p>

              <p className="ml-1 text-lg  text-black/60 inline-flex items-center space-x-4">
                <span className="text-purple-400">
                  <AiOutlinePlus />
                </span>
                <span>Finances & Taxes</span>
              </p>

              <p className="ml-1 text-lg  text-black/60 inline-flex items-center space-x-4">
                <span className="text-purple-400">
                  <AiOutlinePlus />
                </span>
                <span>How to Hire</span>
              </p>

              <p className="ml-1 text-lg  text-black/60 inline-flex items-center space-x-4">
                <span className="text-purple-400">
                  <AiOutlinePlus />
                </span>
                <span>Contracts</span>
              </p>

              <p className="ml-1 text-lg  text-black/60 inline-flex items-center space-x-4">
                <span className="text-purple-400">
                  <AiOutlinePlus />
                </span>
                <span>And More!</span>
              </p>

              <p className="ml-1 text-lg  text-black/60 inline-flex items-center space-x-4">
                <span className="text-purple-400">
                  <AiOutlinePlus />
                </span>
                <span>And More!</span>
              </p>
            </div>
            <div className="flex flex-col ml-10 ">
              <h3 className="text-xl font-semibold ">Get Your Free Copy</h3>
              <div className="mt-10 ">
                <input
                  placeholder="First Name"
                  type="text"
                  required
                  name="name"
                  className="p-2 w-80 bg-[#F2F1F3] border-b-2 border-solid border-[#372656] rounded-md focus:outline-none text-gray-400"
                />
              </div>
              <div className="my-5">
                <input
                  required
                  className="p-2 w-80 bg-[#F2F1F3] border-b-2 border-solid border-[#372656] rounded-md focus:outline-none text-gray-400"
                  placeholder="Where are you located?"
                  type="location"
                  name="location"
                />
              </div>
              <div>
                <input
                  required
                  className="p-2 w-80 bg-[#F2F1F3] border-b-2 border-solid border-[#372656] rounded-md focus:outline-none text-gray-400"
                  placeholder="Email Address"
                  type="email"
                  name="email"
                />
              </div>
            </div>
          </div>

          <button className="-mt-14 mb-6 ml-[700px] bg-purple-500 px-4 py-2 text-white rounded-full text-lg font-medium hover:bg-[#372656]">
            Download Now!
          </button>
        </div>
      </div>

      <div className="bg-[#372656] text-white text-center py-48 -mt-40 -z-50">
        <div className="mt-28">
          <h3 className="text-xl font-medium">BOULDER | KANSAS CITY</h3>
          <p className="text-sm font-mono mt-6">
            © 2023 Pixel Law | Terms of Use | Privacy Policy
          </p>
          <p className="text-sm font-mono mt-4">
            The choice of a lawyer is an important decision and should not be
            based solely upon advertisements.
          </p>
        </div>
      </div>
    </>
  );
}
