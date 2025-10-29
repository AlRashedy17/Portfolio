
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('mainNav');
      if (window.scrollY > 50) {
        nav.classList.add('navbar-shrink');
      } else {
        nav.classList.remove('navbar-shrink');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="mainNav"
      className="navbar navbar-expand-lg navbar-dark fixed-top py-4"
      style={{ backgroundColor: "#2C3E50" }}
    >
      <div className="container">
        <NavLink className="navbar-brand text-uppercase fw-bolder" to="/">
          Start Framework
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
        >
          Menu <i className="fas fa-bars ms-1"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto text-uppercase fw-bold">

            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/portfolio">
                Portfolio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

 
 
