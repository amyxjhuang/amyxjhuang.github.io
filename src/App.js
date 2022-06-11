import React from 'react';
import About from './About.jsx'
import Projects from './Projects.jsx'
import LoveCalc from './love-calc.jsx'
import WeatherForecast from './weather/WeatherForecast.js'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTab:"home"
    }
  }

  changeTab = (newTab) => {
    this.setState({currentTab: newTab});
  }

  render() {
    console.log(this.state.currentTab)
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="title"><img src="https://sdk.bitmoji.com/render/panel/965f4060-c8d0-4b02-8e05-45f7beb660eb-32f4148d-fa0e-4a7f-8810-f7e01716acf4-v1.png?transparent=1&palette=1" height="100px"/>AMY XUEJING HUANG</h1>

          <div id="nav">
            <a className="nav-item" onClick={() => this.changeTab("home")}>HOME</a>
            <a className="nav-item" onClick={() => this.changeTab("projects")}>PROJECTS</a>
            <a className="nav-item"onClick={() => this.changeTab("artwork")}>LOVE</a>
            <a className="nav-item"onClick={() => this.changeTab("weather")}>WEATHER</a>

          </div>

          <div id="social">
              <a href="https://linkedin.com/in/amyxjhuang">
              <img className="icon"
                   src="https://image.flaticon.com/icons/png/512/61/61109.png"/>
              </a>
              <a href="https://github.com/amyxjhuang">
              <img className="icon"
                   src="https://image.flaticon.com/icons/svg/25/25231.svg"/>
              </a>
              <a href="https://tinyurl.com/amyhuangresume">
              <img className="icon"
                   src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/612/aiga_mail_bg-512.png"/>
              </a>
          </div>
        </header>
        <div className="main">
          <About changeTab={this.changeTab}
                 currentTab={this.state.currentTab}/>

         <Projects changeTab={this.changeTab}
                  currentTab={this.state.currentTab}/>
         <LoveCalc currentTab={this.state.currentTab}/>
         <WeatherForecast currentTab={this.state.currentTab}
                  changeTab={this.changeTab}/>
        </div>
      </div>
    );
  }

}

export default App;
