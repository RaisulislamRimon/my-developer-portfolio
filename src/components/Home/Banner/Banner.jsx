import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              MD RAISUL ISLAM RIMON
            </h1>
            <h2 className="py-6 text-sm sm:text-base md:text-xl font-bold">
              FRONT END WEB DEVELOPER
            </h2>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="avatar">
                <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://i.ibb.co/6n23vsp/rimon-photopea-edit-removebg-preview-2.png"
                    className="max-w-sm rounded-lg shadow-2xl"
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
