
import './App.css';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import QuestionCard from './components/QuestionCard';
//import QuestionForm from './components/QuestionForm';

import store from './store';

 class App extends Component {
   render(){
    return (
      <Provider store={store}>
        <div className="App">
         <QuestionCard />
        </div>
      </Provider>
    );
  }
   }
  

export default App;
