import React from "react";
// import axios from "axios";


const YoutubeAudio = (props) => {
  props.setHeading("Youtube Video to MP3");

  const createLink = () => { };

  const convertVideo = () => {
    const link = document.getElementById("link").value;
    console.log(link);

    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '6a9a50d7afmsh4dd6f42d1fed78cp184326jsn64d0ef714c15',
        'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
      }
    };

    fetch(
      `https://youtube-mp3-download1.p.rapidapi.com/dl?id=${link}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const data = response.link;
        console.log(response);

        props.setDownloadLink(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <img src="https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0" class="card-img-top" alt="hi" />
      <h5 className="card-title mt-4">
        {" "}
        You can convert youtube video to mp3
      </h5>
      <p className="card-text">Paste the id from youtube here</p>
      <div className="header">
        <input
          className="border border-warning shadow p-2 mb-3 bg-body-warning rounded"
          onInput={createLink}
          id="link"
          type="url"
        />
      </div>
      <button
        onClick={convertVideo}
        className="btn-outline-warning shadow my-2   bg-body-warning rounded btn "
      >
        Convert
      </button>
    </>
  );
};

export default YoutubeAudio;
