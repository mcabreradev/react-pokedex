import React from "react";

const styles = {
  padding: "19px 0px 0px 0px"
};

function Header() {
  return (
    <nav className="navbar is-fixed-top is-warning">
      <div className="navbar-brand">
        <a className="navbar-item has-text-weight-semibold is-size-4"> Pokedex</a>
        <small className="has-text-weight-light" style={styles}>react, redux, firebase, bulma.io</small>
        <div
          className="navbar-burger burger"
          data-target="navMenuColorwarning-example">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="bd-tw-button button" data-social-network="Github" data-social-action="tweet" data-social-target="https://github.com/mcabreradev/react-pokedex" target="_blank" href="https://github.com/mcabreradev/react-pokedex">
                  <span className="icon"><i className="fab fa-github"></i></span>
                  <span>Fork me</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
}

export default Header;
