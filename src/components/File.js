import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const File = () => {
  const [file, setFile] = useState([]);

  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = () => {
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/Files?files=url")
      .then((result) => {
        setFile(result.data);
      });
  };
  return (
    <div className="mt-5">
      <div  className="mt-5">
      <h2>Files/Documents</h2>
        {file.map((element,index) => {
          return (
            <div key={index} className="">
              <div className="pt-5">File {element.files[0]}</div>
              <div className="pt-5">File {element.files[1]}</div>
              <div className="pt-5">File {element.files[2]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default File;
