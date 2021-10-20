import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <div>
        <img
          src="https://freefrontend.com/assets/img/html-css-404-page-templates/404-SVG-Animated-Page-Concept.png"
          alt=""
          width="800px"
          className="inline-block"
        />
      </div>
      <Link to="/">
        <button className="bg-green-400 ml-2 px-3 py-2 rounded mb-10">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
