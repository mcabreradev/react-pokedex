import React from 'react';
import { techs } from "../../util";

const styles = {
  padding: "19px 0px 0px 0px"
};

const Header = () => ( 
  <nav className="navbar is-fixed-top is-warning">
    <div className="navbar-brand">
        <a className="navbar-item has-text-weight-semibold is-size-4">Pokedex</a>
        <small className="has-text-weight-light" style={styles}>
            { techs.map( (tech, key) => [ <span key={key}>{tech}{techs.length-1 === key ? "" : ", "}</span> ] ) }
        </small>
        <div className="navbar-burger burger" data-target="navMenuColorwarning-example"> <span /> <span /> <span />
        </div>
    </div>

    <div className="navbar-menu">
        <div className="navbar-end">
            <div className="navbar-item">
                <div className="field is-grouped">
                <p className="control">
                    <a className="bd-tw-button button" data-social-network="Github" data-social-action="tweet" data-social-target="https://github.com/mcabreradev/react-pokedex" href="https://github.com/mcabreradev/react-pokedex">
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

export default Header;