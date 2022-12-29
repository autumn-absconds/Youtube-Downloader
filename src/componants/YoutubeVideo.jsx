import React from "react";
// import axios from "axios";


const YoutubeVideo = (props) => {
  props.setHeading("Youtube Video downloader");

  const createLink = () => {};

  const convertVideo = () => {
    const link = document.getElementById("link").value;
    console.log(link);
    // const options = {
    //   method: "GET",
    //   url:
    //     "https://youtube-video-full-hd-1080p.p.rapidapi.com/GetVideoHDDetails",
    //   params: { URL: "https://www.youtube.com/watch?v=oskpFeW3TYE" },
    //   // params: { URL: `${link}` },
    //   headers: {
    //     "X-RapidAPI-Key": "6a9a50d7afmsh4dd6f42d1fed78cp184326jsn64d0ef714c15",
    //     "X-RapidAPI-Host": "youtube-video-full-hd-1080p.p.rapidapi.com"
    //   }
    // };

    // const apiCall = () => {
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    // };

    // apiCall();
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
        const data = response;
        console.log(response);

        props.setDownloadLink(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
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
    </>
  );
};

export default YoutubeVideo;
