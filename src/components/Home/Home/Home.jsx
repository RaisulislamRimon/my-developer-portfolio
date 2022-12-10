import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <Projects />
    </div>
  );
};

export default Home;
