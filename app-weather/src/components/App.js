/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

//function App() {
class App extends Component {
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: '',
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCitySubmit = (e) => {
    e.preventDefault();
    // console.log('potwierdzony formularz');

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=29e41f2bae6fbf235cc88ac35096ca68&lang={lang}&units=metric`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error('Nie udalo się');
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className='App'>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result />
      </div>
    );
  }
}

export default App;
