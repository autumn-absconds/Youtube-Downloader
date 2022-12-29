import React, { useState } from "react";
import "../App.css";

import YoutubeVideo from "./YoutubeVideo";

import { Route, Routes } from "react-router-dom";
import YoutubeAudio from "./YoutubeAudio";

const Main = () => {
  const [heading, setHeading] = useState("hi");

  const [downloadLink, setDownloadLink] = useState(" ");
  // if (downloadLink === " ") {
  //   document.getElementById("Button").disabled = true;
  // } else {
  //   document.getElementById("Button").disabled = false;
  // }

  return (
    <>
      <div style={{ width: "75%" }} className="card my-5 header shadow p-3 mb-5 bg-body-tertiary rounded text-center">
        <div className="card-header text-light bg-danger bg-gradient bg-opacity-100 py-3">
          <h2>{heading}</h2>
        </div>
        <div className="card-body">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <YoutubeVideo
                  setHeading={setHeading}
                  setDownloadLink={setDownloadLink}

                />
              }
            ></Route>
            <Route
              exact
              path="audio"
              element={
                <YoutubeAudio
                  setHeading={setHeading}
                  setDownloadLink={setDownloadLink}

                />
              }
            ></Route>
          </Routes>

          <a
            disabled
            href={downloadLink}
            target="_blank"
            className={`btn btn-outline-success w-10  shadow mb-4  bg-body-success rounded ${downloadLink === " " ? "disabled" : " "}`}
            style={{ margin: "auto" }}
            // onClick={() => {
            //   console.log(downloadLink);

            //   window.open(
            //     { downloadLink },
            //     "_blank",
            //     "toolbar=yes,top=500,left=500,width=400,height=400"
            //   );
            // }}
            id="Button"
          >
            Download
          </a>
        </div>
        <div className="card-footer fw-bold text-light bg-danger bg-gradient">
          Welcome
        </div>
      </div>
    </>
  );
};

export default Main;
