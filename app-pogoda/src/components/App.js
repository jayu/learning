import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

class App extends Component {
  frender() {
    return (
      <div className='App'>
        <Form />
        <Result />
      </div>
    );
  }
}

export default App;
