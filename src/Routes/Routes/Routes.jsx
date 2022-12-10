import { createBrowserRouter } from "react-router-dom";
import Banner from "../../components/Home/Banner/Banner";
import Home from "../../components/Home/Home/Home";
import Projects from "../../components/Home/Projects/Projects";
import Main from "../../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Projects />,
      },
    ],
  },
]);

export default router;
