import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="d-flex px-md-5 px-1 navbar-nav flex-md-row flex-col justify-content-md-between justify-content-center align-items-center">
        <a href="#" className="navbar-brand fs-2 fw-bold">
          shohan
        </a>
        <ul className="navbar-nav d-flex flex-row gap-3 fs-2">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa-brands fa-square-github"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa-brands fa-dribbble"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
