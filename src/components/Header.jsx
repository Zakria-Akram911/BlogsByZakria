import React from "react";
import { NavLink } from "react-router-dom";

const Header = (active, setActive) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid bg-faded padding-media">
        <div className="container padding-media">
          <nav className="navbar navbar-toggleable-md navbar-light">
            <button
              className="navbar-toggler mt-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              data-bs-parent="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle Navigation"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "home" ? "active" : ""
                    }`}
                    onClick={() => setActive("home")}
                  >
                    Home
                  </li>
                </NavLink>

                <NavLink to="/add-blog" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "add-blog" ? "active" : ""
                    }`}
                    onClick={() => setActive("add-blog")}
                  >
                    Create
                  </li>
                </NavLink>

                <NavLink to="/about" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "about" ? "active" : ""
                    }`}
                    onClick={() => setActive("about")}
                  >
                    About
                  </li>
                </NavLink>
              </ul>
              <div className="row g-3">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <NavLink to="/auth" style={{ textDecoration: "none" }}>
                    <li
                      className={`nav-item nav-link ${
                        active === "login" ? "active" : ""
                      }`}
                      onClick={() => setActive("login")}
                    >
                      Login
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
