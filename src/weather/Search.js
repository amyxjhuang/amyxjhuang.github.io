import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Display from './Display.js';
import Form from 'react-bootstrap/Form';

const apiKey= 'b6f9c25da2d86f310a1ed19f7c5bc7e5';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      city: '',
      error: false,
      description: [],
      temp_min: [],
      temp_max: [],
      time: [],
      icon: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  kToF(degree) {
    return (Math.round((degree - 273.15) * 9/5 + 32));
  }

  handleChange(event) {
    this.setState({value: event.target.value,
                   display: false,
                   error: false});

  }

  fetchWeather = async(event) => {
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.value},us&appid=b6f9c25da2d86f310a1ed19f7c5bc7e5`);
    const data = await apiCall.json();
    if (data.cod === "404") {
      this.setState({error: true});
    }
    else {
      this.setState({
        city: data.city.name,
        description: [data.list[0].weather[0].description, data.list[8].weather[0].description, data.list[16].weather[0].description, data.list[24].weather[0].description, data.list[32].weather[0].description],
        temp_min: [this.kToF(data.list[0].main.temp_min), this.kToF(data.list[8].main.temp_min), this.kToF(data.list[16].main.temp_min), this.kToF(data.list[24].main.temp_min), this.kToF(data.list[32].main.temp_min)],
        temp_max: [this.kToF(data.list[0].main.temp_max), this.kToF(data.list[8].main.temp_max), this.kToF(data.list[16].main.temp_max), this.kToF(data.list[24].main.temp_max), this.kToF(data.list[32].main.temp_max)],
        time: [data.list[0].dt_txt, data.list[8].dt_txt, data.list[16].dt_txt, data.list[24].dt_txt, data.list[32].dt_txt],
        icon: [data.list[0].weather[0].icon, data.list[8].weather[0].icon, data.list[16].weather[0].icon, data.list[24].weather[0].icon, data.list[32].weather[0].icon]
      });
    }
  }

  handleSubmit(event) {
    this.fetchWeather();
    this.setState({display: true});
    event.preventDefault();
  }

  render() {
      return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Search"/>
          </Form>

          <Display city={this.state.city}
                   searched={this.state.display}
                   error={this.state.error}
                   description={this.state.description}
                   temp_max={this.state.temp_max}
                   temp_min={this.state.temp_min}
                   time={this.state.time}
                   icon={this.state.icon}/>
       </div>
    );
  }
}


export default Search;
