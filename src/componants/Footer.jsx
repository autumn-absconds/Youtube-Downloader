import React from "react";

const Footer = () => {

  const myStyle = {
    color: "black",
    fontSize: 15
  }


  return (
    <div className="border-top">
      <footer className=" my-0 d-flex flex-wrap justify-content-evenly align-items-center pt-1  ">
        <strong style={myStyle}>Shubham Yadav</strong>



        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item ">
            <a href="/" className="nav-link px-2 ">
              {" "}
              <i className="bi bi-instagram " style={myStyle}></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/autumn-absconds" className="nav-link px-2 ">
              <i className=" bi bi-github " style={myStyle}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://twitter.com/autumn_absconds"
              className="nav-link px-2 "
            >
              <i className=" bi bi-twitter" style={myStyle}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/shubham-yadav-6060941a5/"
              className="nav-link px-2 "
            >
              <i className=" bi bi-linkedin" style={myStyle}></i>
            </a>
          </li>

        </ul>
      </footer>
    </div>
  );
};

export default Footer;
