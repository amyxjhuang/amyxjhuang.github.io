import React from 'react';
import Search from './Search.js'
import Display from './Display.js'
import './App.css';
import logo from './logo.svg';
import Image from 'react-bootstrap/Image';




const location = "Berkeley,us";


class WeatherForecast extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    if (this.props.currentTab === "weather"){

      return (
        <div className="blue-back">
          <div>
          <div className="weather">
            <h1> Amy's Weather App </h1>
             Blah blah find out what the weather is like this week (enter your city).
             </div>
             <img src={logo} className="App-logo" alt="logo" />

             <Search />

          </div>
        </div>
      );
    } else {
      return(<div></div>)
    }
  }

}
export default WeatherForecast;
