import React from "react";

const Project = ({ project }) => {
  const { name, description, img, link } = project;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Description: {description}</p>
          <p className="underline">
            <a href={link} target="_blank" rel="noreferrer">
              Live Site
            </a>
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
