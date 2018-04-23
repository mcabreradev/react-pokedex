import React from "react";

function Header() {
  return (
    <nav className="navbar is-fixed-top is-warning">
      <div className="navbar-brand">
        <a className="navbar-item has-text-weight-semibold is-size-4">
          Pokedex
        </a>
        <div
          className="navbar-burger burger"
          data-target="navMenuColorwarning-example">
          <span />
          <span />
          <span />
        </div>
      </div>

    </nav>
  );
}

export default Header;
