import React from "react";

const Footer = () => {
  return (
    <div className="border-top">
      <footer class="mx-5 my-0 d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
        <strong class="col-md-4 mb-0 ">Shubham Yadav</strong>

        {/* <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <span className="navbar-brand" to="/"> <img src={props.mode === 'light' ? light : dark} alt='logo' /></span>
        </a> */}

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item ">
            <a href="/" class="nav-link px-2 ">
              {" "}
              <i class="bi bi-instagram "></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://github.com/autumn-absconds" class="nav-link px-2 ">
              <i class=" bi bi-github"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="https://twitter.com/autumn_absconds"
              class="nav-link px-2 "
            >
              <i class=" bi bi-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="https://www.linkedin.com/in/shubham-yadav-6060941a5/"
              class="nav-link px-2 "
            >
              <i class=" bi bi-linkedin"></i>
            </a>
          </li>
          {/* <li class="nav-item"><a href="#" class="nav-link px-2 "><i class="bi-alarm" style={myStyle}></i></a></li> */}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
