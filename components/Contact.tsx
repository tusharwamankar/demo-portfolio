import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center max-w-6xl px-10 mx-auto items-center justify-evenly">
      {/* <h3 className="absolute top-24 uppercase tracking-[15px] font-semibold text-gray-400 text-xl ">
        Contact
      </h3> */}
      <div className="flex flex-col space-y-10 ">
        <h4 className="text-2xl">
          Let's <span className="text-red-300">Talk</span>
        </h4>
      </div>
      <div className="flex flex-col space-y-10">
        <div className="flex flex-row items-center gap-10">
          <PhoneIcon className="h-[40px] text-[#E27508] animate-pulse" />
          <p>+917049258342</p>
        </div>
        <div className="flex flex-row items-center gap-10">
          <EnvelopeIcon className="h-[40px] text-[#E27508] animate-pulse" />
          <p>tusharwamankar10@gmail.com</p>
        </div>
        <div className="flex flex-row items-center gap-10">
          <MapPinIcon className="h-[40px] text-[#E27508] animate-pulse" />
          <p>NIT Kurukshetra, Haryana</p>
        </div>
      </div>
      <form className="flex flex-col space-y-3 w-fit mx-auto">
        <div className="flex space-x-3">
          <input
            placeholder="First Name"
            type="text"
            className="outline-none bg-slate-400/10 p-2 text-gray-400 focus:text-[#cfb8b8] border-b focus:border-[#EE851D] rounded"
          />
          <input
            placeholder="Last Name"
            type="text"
            className="outline-none bg-slate-400/10 p-2 text-gray-400 focus:text-[#cfb8b8] border-b focus:border-[#EE851D] rounded"
          />
        </div>

        <input
          placeholder="Email"
          type="text"
          className="outline-none bg-slate-400/10 p-2 text-gray-400 focus:text-[#cfb8b8] border-b focus:border-[#EE851D] rounded"
        />

        <textarea
          placeholder="Message"
          className="outline-none bg-slate-400/10 p-2 text-gray-400 focus:text-[#cfb8b8] border-b focus:border-[#EE851D] rounded"
        ></textarea>

        <button className="bg-[#f5883a] p-3 rounded border-none text-black font-bold tracking-[2px]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
