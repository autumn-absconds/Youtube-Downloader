
import React, { useState } from "react";
import "../App.css";

import YoutubeVideo from "./YoutubeVideo";

import { Route, Routes } from "react-router-dom";
import YoutubeAudio from "./YoutubeAudio";

const Main = () => {
  const [heading, setHeading] = useState("hi");

  const [downloadLink, setDownloadLink] = useState(" ");


  return (
    <div>
      <div className="row gx-5  mx-3">
        <div className="col-sm-8 card my-3 h-100  header rounded-0 rect text-center  ">
          <div className="card-header rounded-0 rect text-light bg-danger bg-gradient bg-opacity-100 ">
            <h2>{heading}</h2>
          </div>
          <div className="card-body rounded-0">
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
              className={`btn download btn-outline-success w-10   mb-4  bg-body-success rounded ${downloadLink === " " ? "disabled" : " "}`}
              style={{ margin: "auto" }}

              id="Button"
            >
              Download
            </a>
          </div>

          <div className="card-footer rounded-0 fw-bold text-light bg-danger bg-gradient bg-opacity-100">
            Welcome
          </div>
        </div>


        <div className="col-sm-4 pt-3 bg-dark-subtle container">
          <div className="card" >
            <img src="https://www.bing.com/th?id=OIP.0VtFarqAxKUjzx9tMdzn6AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text .</p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card" >
            <img src="https://www.bing.com/th?id=OIP.0VtFarqAxKUjzx9tMdzn6AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text </p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
};

export default Main;
