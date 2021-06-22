import React from 'react';
import './Result2.css';
import './Result.css';
import { dataRow2 } from './Results.module.css';

const Result = (props) => {
  const { date, city, sunrise, sunset, temp, pressure, wind, err } =
    props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <div>
        <h3 className="dataRow">
          Wyniki wyszukiwania dla <em>{city}</em>
        </h3>
        <h4 className={dataRow2}>Dane dla dnia i godziny: {date}</h4>
        <h4>Aktualna temperatura: {temp}</h4>
        <h4>Wschód słońca: {sunriseTime}</h4>
        <h4>Zachod słońca: {sunsetTime}</h4>
        <h4>Aktualna siła wiatru: {wind}</h4>
        <h4>Aktualne ciśnienie: {pressure}</h4>
      </div>
    );
  }

  return (
    <div className='result'>{err ? `Nie mamy w bazie ${city}` : content}</div>
  );
};

export default Result;
