import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import "react-photo-view/dist/react-photo-view.css";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
