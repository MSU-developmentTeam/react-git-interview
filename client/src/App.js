
import './App.css';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
//import QuestionForm from './components/QuestionForm';

import store from './store';

 class App extends Component {
   render(){
    return (
      <Provider store={store}>
        <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route> 
          </Switch>
        </div>
        </Router>
      </Provider>
    );
  }
   }
  

export default App;
