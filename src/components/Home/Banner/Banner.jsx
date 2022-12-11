import React from "react";
import { Link, Outlet } from "react-router-dom";
import Typewriter from "typewriter-effect";
import bgwave from "../../../assets/bg-wave.svg";

const Banner = () => {
  const downloadResume = () => {
    fetch("MD._RAISUL ISLAM RIMON.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "MD._RAISUL ISLAM RIMON.pdf";
        alink.click();
      });
    });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <img
          src={bgwave}
          className="col-start-1 row-start-1 self-center opacity-25"
          alt="Tailwind Play"
        />

        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:ml-2 mt-3 md:mt-5">
              MD RAISUL ISLAM RIMON
              {/* <Typewriter
                options={{
                  strings: [" MD RAISUL ISLAM RIMON"],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
            </h1>
            <h2 className="py-6 text-white text-sm sm:text-base md:text-xl  lg:ml-2 font-bold">
              <Typewriter
                options={{
                  strings: [
                    "FRONT END WEB DEVELOPER",
                    "React Js Developer",
                    "Javascript Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 10,
                }}
              />
            </h2>
            <div className="flex gap-3 mt-5 lg:ml-2 flex-col md:flex-row">
              <div onClick={downloadResume}>
                <button
                  className="btn btn-warning rounded-3xl px-8 w-full
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300
                "
                >
                  Download Resume
                </button>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="btn btn-info rounded-3xl px-8 w-full
                  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300 
                  "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm hover:shadow-2xl hover:shadow-current hover:cursor-crosshair">
            <div className="card-body">
              <div className="avatar">
                <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://i.ibb.co/6n23vsp/rimon-photopea-edit-removebg-preview-2.png"
                    className="max-w-sm rounded-lg shadow-current rotate-[-10deg]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
