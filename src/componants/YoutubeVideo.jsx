import React, { useState } from "react";
// import axios from "axios";
import img from "./img.jpg";

const YoutubeVideo = (props) => {
  const [errorText, setErrorText] = useState(" ");
  props.setHeading("Youtube Video downloader");

  const createLink = () => { };

  const convertVideo = () => {
    const link = document.getElementById("link").value;
    console.log(link);
    
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6a9a50d7afmsh4dd6f42d1fed78cp184326jsn64d0ef714c15",
        "X-RapidAPI-Host": "youtube-video-full-hd-1080p.p.rapidapi.com"
      }
    };

    fetch(
      `https://youtube-video-full-hd-1080p.p.rapidapi.com/GetVideoHDDetails?URL=${link}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const data = response[0].DownloadURL;
        console.log(response);
setErrorText(data)
        props.setDownloadLink(data);
      })
      .catch((err) => {
        console.error(err)
        setErrorText(err);
      });
  };

  return (
    <>
      <img src={img} className="card-img-top object-fit-md-contain border rounded" alt="hi" height={400}  />
      <h5 className="card-title">
        {" "}
        You can download videos from youtube in 1080px
      </h5>
      <p className="card-text">Paste the url from youtube here</p>
      <div className="header">
        <input
          className="border border-danger shadow p-2 mb-3 bg-body-danger rounded"
          onInput={createLink}
          id="link"
          type="url"
        />
      </div>
      <button
        onClick={convertVideo}
        className="shadow my-2   bg-body-primary rounded btn btn-outline-danger"
      >
        Convert
      </button>

      <p className="card-text text-danger pt-3">Result</p>
      <p className="card-text text-success">{errorText}</p>
    </>
  );
};

export default YoutubeVideo;
