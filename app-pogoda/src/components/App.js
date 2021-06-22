import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

class App extends Component {
  state = {
    value: '',
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className='App'>
        <Form value={this.state.value} change={this.handleInputChange} />
        <Result />
      </div>
    );
  }
}

export default App;
