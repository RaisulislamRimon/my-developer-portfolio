import React from "react";

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
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:ml-2">
              MD RAISUL ISLAM RIMON
            </h1>
            <h2 className="py-6 text-sm sm:text-base md:text-xl  lg:ml-2 font-bold">
              FRONT END WEB DEVELOPER
            </h2>
            <div className="flex gap-3 mt-5  lg:ml-2">
              <div onClick={downloadResume}>
                <button className="btn rounded-3xl px-8">
                  Download Resume
                </button>
              </div>
              <div>
                <a className="btn rounded-3xl px-8">Contact</a>
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm hover:shadow-2xl hover:shadow-current hover:cursor-crosshair">
            <div className="card-body">
              <div className="avatar">
                <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://i.ibb.co/6n23vsp/rimon-photopea-edit-removebg-preview-2.png"
                    className="max-w-sm rounded-lg shadow-current"
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
