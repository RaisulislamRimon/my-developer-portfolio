import { createBrowserRouter } from "react-router-dom";
import Banner from "../../components/Home/Banner/Banner";
import Home from "../../components/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
    ],
  },
]);

export default router;
