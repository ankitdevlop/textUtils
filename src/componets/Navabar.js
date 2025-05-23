import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">{props.about}</a>
              </li>
            </ul>
            <div className="d-flex gap-3 ms-auto">
              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="darkModeSwitch" onClick={props.toggleDarkMode} />
                <label className="form-check-label" htmlFor="darkModeSwitch" id='btn'><strong>🌞</strong></label>
              </div>
              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="redModeSwitch" onClick={props.toggleRedMode} />
                <label className="form-check-label" htmlFor="redModeSwitch" id='btn2'><strong>Enable Red Mode</strong></label>
              </div>
              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="pinkModeSwitch" onClick={props.togglePinkMode} />
                <label className="form-check-label" htmlFor="pinkModeSwitch" id='btn3'><strong>Enable Pink Mode</strong></label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Text Utils",
  about: "About Text Utils",
};
