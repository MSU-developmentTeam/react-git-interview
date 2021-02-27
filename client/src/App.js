import './App.css';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import './styles/styles.css'
import store from './store';
//import LandingPage from "./pages/LandingPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" >
            <Switch>
              <Route path="/" exact>
                <HomePage />
                {/* <LandingPage /> */}
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;
