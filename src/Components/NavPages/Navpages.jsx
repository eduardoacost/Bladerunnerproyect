import React from 'react';
import './NavPages.scss';

export const Navpages =() =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item1">
                  <a className="nav-link" href="#">Titulo 1</a>
                </li>
                <li className="nav-item2">
                  <a className="nav-link" href="#">Titulo 2</a>
                </li>
              </ul>
              <button className="btn btn-outline-light">Login</button>
            </div>
          </div>
        </nav>
      );
    };
