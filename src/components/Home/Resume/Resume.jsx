import React from "react";
import FileViewer from "react-file-viewer";
import resumeFile from "../../../assets/MD._RAISUL ISLAM RIMON.pdf";

// const file =
//   "https://drive.google.com/file/d/1fIPsQjYOGVTN04EbxL-4SJB_qgTsOE4i/view?usp=share_link";
const type = "pdf";

const Resume = () => {
  const onError = (e) => {
    Logger.logError(e, "error in file-viewer");
  };

  return (
    <div className="my-20 md:w-2/4 mx-auto text-center">
      <div>
        <h1 className="text-4xl text-center mb-5">Resume</h1>
      </div>
      {
        <FileViewer
          fileType={type}
          filePath={resumeFile}
          onError={onError}
          className="text-center"
        />
      }
    </div>
  );
};

export default Resume;
