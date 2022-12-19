import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import LoadingError from "../../Shared/Loading/LoadingError";
import Project from "../Project/Project";

const Projects = () => {
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   fetch("https://my-developer-portfolio-server.vercel.app/projects")
  //     .then((res) => res.json())
  //     .then((data) => setProjects(data));
  // }, []);
  const {
    isLoading,
    error,
    data: projects = [],
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://my-developer-portfolio-server.vercel.app/projects").then(
        (res) => res.json()
      ),
  });

  if (isLoading) return <Loading />;

  // if (error) return "An error has occurred: " + error.message;
  if (error) return <LoadingError />;
  return (
    <div className="min-h-screen my-20">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-white my-10">
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
