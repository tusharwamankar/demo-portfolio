import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (FormData) => {
    window.location.href = `mailto:tusharwamankar10@gmail.com?subject=${FormData.subject}&body=Hi, ${FormData.name} here. ${FormData.message} (${FormData.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center max-w-6xl px-10 mx-auto items-center justify-evenly">
      {/* <h3 className="mt-12 uppercase tracking-[15px] font-semibold text-gray-400 text-xl ">
        Contact
      </h3> */}
      <div className="flex flex-col space-y-10 ">
        <h4 className="text-2xl mt-8">
          Let&apos;s <span className="text-cyan-500">Talk</span>
        </h4>
      </div>
      <div className="flex flex-col space-y-10">
        <div className="flex flex-row items-center gap-3 md:gap-7">
          <PhoneIcon
            onClick={() => parent.open("tel:+917049258342")}
            className="contact-icons cursor-pointer"
          />
          <p>+917049258342</p>
        </div>
        <div className="flex flex-row items-center gap-3 md:gap-7">
          <EnvelopeIcon
            onClick={() => parent.open("mailto:tusharwamankar10@gmail.com")}
            className="contact-icons cursor-pointer"
          />
          <p>tusharwamankar10@gmail.com</p>
        </div>
        <div className="flex flex-row items-center gap-3 md:gap-7">
          <MapPinIcon
            onClick={() => parent.open("https://goo.gl/maps/JbUFVWmLFURVsbmq6")}
            className="contact-icons cursor-pointer"
          />
          <p>NIT Kurukshetra, Haryana</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 w-fit mx-auto my-4 mb-10 md:mb-4 "
      >
        <div className="flex space-y-3 flex-col sm:flex-row sm:space-x-3 sm:space-y-0">
          <input
            {...register("name")}
            placeholder="Name"
            type="text"
            className="form-inputs"
          />
          <input
            {...register("email")}
            placeholder="Email"
            type="email"
            className="form-inputs"
          />
        </div>

        <input
          {...register("subject")}
          placeholder="Subject"
          type="text"
          className="form-inputs"
        />

        <textarea
          {...register("message")}
          placeholder="Message"
          className="form-inputs"
        ></textarea>

        <button className="bg-cyan-500 p-3 uppercase rounded border-none text-black font-semibold tracking-[2px] ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
