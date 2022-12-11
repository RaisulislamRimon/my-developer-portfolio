import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <div>
        <img
          src="https://www.nicepng.com/png/full/21-217143_crying-face-emoji-rubber-stamp-sad-smiley-emoji.png"
          alt=""
          className="w-40 mx-auto mt-24 mb-10 bg-white rounded-full"
        />
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center text-white">
          This content is not available right now{" "}
          <span className="text-red-600">!</span>
        </h1>
        <div className="w-full">
          <Link to="/">
            <p className="md:text-2xl text-center my-10 border p-5 md:w-1/3 mx-auto rounded-xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300 hover:rounded-full">
              {/* <p
              className="btn btn-error rounded-3xl px-8 w-1/3
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300 text-white text-center mx-auto"
            > */}
              Go to Homepage
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
