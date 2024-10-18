import React from "react";
import { Link, Outlet } from "react-router-dom";
import Typewriter from "typewriter-effect";
import bgwave from "../../../assets/bg-wave.svg";
import { ImLinkedin2 } from "react-icons/im";
import { FaMedium } from "react-icons/fa";

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
              {/* social media connection link */}
              <div className="m-3">
                <span className="font-bold text-lg text-white">
                  Social Media Connection
                </span>
                <div className="flex p-3">
                  <a
                    href="https://twitter.com/rimon_raisul"
                    className="text-white m-2"
                    // this link will automatically open in a new tab
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCubND4KfOLYSs6KM-roTFnA"
                    className="text-white m-2"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/raisul.rimon"
                    className="text-white m-2"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/md-raisul-islam-rimon/"
                    className="text-white m-2"
                    target="_blank"
                  >
                    <ImLinkedin2 className="text-2xl" />
                  </a>
                  <a
                    href="https://medium.com/@rimonppip0"
                    className="text-white m-2"
                    target="_blank"
                  >
                    <FaMedium className="text-2xl" />
                  </a>
                  <a
                    href="https://bdit.community/u/md_rimon"
                    className="text-white m-2"
                    target="_blank"
                  >
                    <img
                      src="https://bdit-community-public.s3.us-west-002.backblazeb2.com/original/2X/d/d608f7b8c551bd8b5294873181b1751c77140015.png"
                      alt="bdit community logo"
                      className="h-7"
                    />
                  </a>
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
