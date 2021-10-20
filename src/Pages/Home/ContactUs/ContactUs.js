import React from "react";

const ContactUs = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-20 " id="contact-us">
      <div className="text-center">
        <h1 className="text-3xl font-medium">Get your first</h1>
        <h1 className="text-3xl font-medium"> free online consultation</h1>
      </div>
      <div className="flex justify-center mt-10 mb-20 ">
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Enter your name"
            className="block bg-green-100 m-2 px-4 py-2 rounded w-3/4"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="block bg-green-100 m-2 px-4 py-2 rounded w-3/4"
            required
          />
          <input
            type="number"
            placeholder="+880........"
            className="block bg-green-100 m-2 px-4 py-2 rounded w-3/4"
            required
          />
          <textarea
            placeholder="Message...."
            rows="4"
            cols="32"
            className="block bg-green-100 m-2 px-4 py-2 rounded"
            required
          />
          <input
            type="submit"
            value="Submit"
            className="bg-green-400 px-4 py-2 m-2 rounded cursor-pointer
        "
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
