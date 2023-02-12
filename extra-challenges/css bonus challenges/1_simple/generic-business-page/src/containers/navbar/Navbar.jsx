import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="Navbar__navbar">
      <a className="Navbar__home" href="#home">Home</a>
      <div class="Navbar__links">
        <ul class="Navbar__navbar-nav">
          <li class="Navbar__nav-item">
            <span class="Navbar__navbar-links">Link 1</span>
          </li>

          <li class="Navbar__nav-item">
            <span class="Navbar__navbar-links">Link 2</span>
          </li>

          <li class="Navbar__nav-item">
            <span class="Navbar__navbar-links">Link 3</span>
          </li>
          <li class="Navbar__nav-item">
            <span class="Navbar__navbar-links">Link 4</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
