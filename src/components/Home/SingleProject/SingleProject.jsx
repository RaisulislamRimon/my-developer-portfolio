import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useParams } from "react-router-dom";

const SingleProject = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    refetch,
    data: singleProject = [],
  } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/projects/${id}`);
      const data = await res.json();
      return data;
    },
  });

  const { name, description, img, link, previews, clientCode, serverCode } =
    singleProject;

  const desc = description?.split(".");
  const result = desc?.length;

  if (isLoading) return "Loading...";

  if (error) {
    return <div>"An error has occurred: " + error.message</div>;
  }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-white my-10 underline">
        {name}
      </h1>
      <div className="card bg-base-100 shadow-xl container mx-auto">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:text-center">
          <PhotoProvider>
            {previews.map((preview, i) => (
              <PhotoView key={i} src={preview.img}>
                <img
                  src={preview.img}
                  alt={name}
                  className="rounded-lg md:w-full md:h-60 lg:text-center"
                />
              </PhotoView>
            ))}
          </PhotoProvider>
        </div>
        <div className="card-body lg:w-2/3 mt-5 mx-auto">
          <h2 className="text-white">
            <p className="text-xl bg-slate-700 text-center md:p-2 md: mb-10 rounded-lg">
              Project Description
            </p>{" "}
            {/* {description} */}
            {desc && desc.map((details) => <p>⦿ {details}</p>)}
          </h2>
          <p className="text-white font-bold border p-2 sm:p-3 rounded-md mt-5">
            Client Side Code:{" "}
            <a
              href={clientCode}
              target="_blank"
              className="underline text-white p-2 rounded-lg"
            >
              {clientCode}
            </a>
          </p>
          {serverCode && (
            <p className="text-white font-bold border p-2 sm:p-3 rounded-md">
              Server Side Code:{" "}
              <a
                href={serverCode}
                target="_blank"
                className="underline text-white p-2 rounded-lg"
              >
                {/* {serverCode ? serverCode : "No server available"} */}
              </a>
            </p>
          )}
          <p className="text-white font-bold border p-2 sm:p-3 rounded-md">
            Live Website:{" "}
            <a
              href={link}
              target="_blank"
              className="underline text-white p-2 rounded-lg"
            >
              {link}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
