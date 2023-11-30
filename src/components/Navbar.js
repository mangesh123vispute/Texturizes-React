import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const changeBackground = (e) => {
    props.setTheme(e.target.value);
    props.setDefaultbackground(false);
  };
  return (
    <nav
      className="navbar navbar-expand-lg  bg-body-tertiary"
      data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Textutils
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                {props.about}
              </Link>
            </li>
          </ul>

          <label htmlFor="exampleColorInput" className="form-label mx-3">
            Set Background color.
          </label>
          <input
            type="color"
            className="form-control form-control-color"
            id="exampleColorInput"
            title="Choose your color"
            onChange={changeBackground}
          />

          <div
            className="form-check form-switch"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            <input
              className="form-check-input mx-3"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggle}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.text}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.prototypes = {
  text: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  text: "Textutils",
  about: "About",
};
