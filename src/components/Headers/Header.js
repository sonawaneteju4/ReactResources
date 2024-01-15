import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="">
                Home
              </Link>
              <Link className="nav-link" to="about">
                About
              </Link>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="resources"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="currencyCovertor">
                      Currency Covertor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="multiPageForm">
                      Multi Page Form
                    </Link>
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </nav>{" "}
    </div>
  );
}

export default Header;
