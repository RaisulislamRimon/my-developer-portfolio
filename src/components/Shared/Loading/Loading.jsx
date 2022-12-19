import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Oval
        height={80}
        width={80}
        color="white"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor=""
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loading;
