import React from "react";

const Form = () => {
  return (
    <>
      <form
        action="https://getform.io/f/jbwxndja"
        method="post"
        className="grid md:grid-cols-12 grid-cols-1 gap-3"
      >
        <div className="md:col-span-6">
          <input
            type="name"
            name="name"
            placeholder="Your Name"
            className="w-full bg-[#f8f0e3] rounded-lg h-12 pl-2"
          />
        </div>
        <div className="md:col-span-6">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full bg-[#f8f0e3] rounded-lg h-12 pl-2"
          />
        </div>
        <div className="md:col-span-6">
          <input
            type="number"
            name="number"
            placeholder="Your Number"
            className="w-full bg-[#f8f0e3] rounded-lg h-12 pl-2"
          />
        </div>
        <div className="md:col-span-6">
          <input
            type="subject"
            name="subject"
            placeholder="Your Subject"
            className="w-full bg-[#f8f0e3] rounded-lg h-12 pl-2"
          />
        </div>
        <div className="md:col-span-12">
          <textarea
            name="message"
            id="message"
            rows={10}
            className="bg-[#f8f0e3] rounded-lg w-full pl-2"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="ease-in-out duration-300 bg-blue-300 hover:bg-yellow-300 rounded-full md:h-16 md:w-36 h-12 w-32 text-green-950">
          Submit Now
        </button>
      </form>
    </>
  );
};

export default Form;
