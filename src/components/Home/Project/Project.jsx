import React from "react";

const Project = ({ project }) => {
  const { name, description, img, link } = project;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt={name}
            className="rounded-xl hover:md:scale-125 hover:md:translate-x-4 hover:md:skew-y-3 delay-150 duration-300"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p title={description}>
            Description: {""}
            {description && description.length > 30
              ? description.substring(0, 30) + "..."
              : description}
          </p>
          <p className="underline">
            <a href={link} target="_blank" rel="noreferrer">
              Live Site
            </a>
          </p>
          <div className="card-actions mt-5">
            <button className="btn btn-primary transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
