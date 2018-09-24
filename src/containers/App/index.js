import "bulma/css/bulma.css";
import "bulma-extensions/dist/css/bulma-extensions.min.css";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Header, Search, Error } from "../../components";
import Pokedex from "../Pokedex";
import './styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Search/>
        
        <Router>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Pokedex} />
            <Route exact path={`${process.env.PUBLIC_URL}/pokedex`} component={Pokedex} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
