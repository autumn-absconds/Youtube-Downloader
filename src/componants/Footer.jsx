import React from "react";

const Footer = () => {

   const myStyle = {
    color: "black",
    fontSize: 25
  }
  
  return (
    <div className="border-top">
      <footer className="mx-5 my-0 d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
        <strong className="col-md-4 mb-0 "  style={ myStyle}>Shubham Yadav</strong>

        {/* <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <span className="navbar-brand" to="/"> <img src={props.mode === 'light' ? light : dark} alt='logo' /></span>
        </a> */}

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item ">
            <a href="/" className="nav-link px-2 ">
              {" "}
              <i className="bi bi-instagram " style={ myStyle}></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/autumn-absconds" className="nav-link px-2 ">
              <i className=" bi bi-github "  style={ myStyle}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://twitter.com/autumn_absconds"
              className="nav-link px-2 "
            >
              <i className=" bi bi-twitter"  style={ myStyle}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/shubham-yadav-6060941a5/"
              className="nav-link px-2 "
            >
              <i className=" bi bi-linkedin"  style={ myStyle}></i>
            </a>
          </li>
          {/* <li className="nav-item"><a href="#" className="nav-link px-2 "><i className="bi-alarm" style={myStyle}></i></a></li> */}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
