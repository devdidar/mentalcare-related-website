import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="flex items-center mt-5 banner">
      <div className="ml-10 w-2/4 banner-left">
        <h2 className="text-3xl banner-title">
          Private Mental Health Consultation from a Professional
        </h2>
        <p className="my-5">
          Mental health includes our emotional, psychological, and social
          well-being. It affects how we think, feel, and act. It also helps
          determine how we handle stress, relate to others, and make choices.
          Mental health is important at every stage of life, from childhood and
          adolescence through adulthood.
        </p>
        <HashLink smooth to='/home#contact-us'>
        <button className="bg-green-400 px-2 py-2 rounded-lg">
          Get A Consultation
        </button>
        </HashLink>
      </div>
      <div className="image">
        <img
          className="w-3/4 ml-20"
          src="https://f.hubspotusercontent30.net/hub/20032737/hubfs/talking-minds-demo-images/pic(1).jpg?width=811&name=pic(1).jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
