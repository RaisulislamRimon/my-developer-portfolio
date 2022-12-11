import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../../components/Home/AboutMe/AboutMe";
import Banner from "../../components/Home/Banner/Banner";
import Blog from "../../components/Home/Blog/Blog";
import Contact from "../../components/Home/Contact/Contact";
import Home from "../../components/Home/Home/Home";
import Portfolio from "../../components/Home/Portfolio/Portfolio";
import Projects from "../../components/Home/Projects/Projects";
import Resume from "../../components/Home/Resume/Resume";
import SingleProject from "../../components/Home/SingleProject/SingleProject";
import NotFound from "../../components/Shared/NotFound/NotFound";
import Main from "../../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Projects />,
      },
      {
        path: "/project/:id",
        element: <SingleProject />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
