import React, { useEffect, useState } from "react";
import Project from "../Project/Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-center text-white my-10">
        My Recent Completed Project
      </h1>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
