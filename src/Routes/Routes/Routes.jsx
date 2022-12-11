import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../../components/Home/AboutMe/AboutMe";
import Banner from "../../components/Home/Banner/Banner";
import Contact from "../../components/Home/Contact/Contact";
import Home from "../../components/Home/Home/Home";
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
