import React from 'react';
import About from './About.jsx'
import Projects from './Projects.jsx'
import LoveCalc from './love-calc.jsx'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/">
          <h1  id="title"><img id="strawberry-title" src={require("./images/straw1.png")} height="60px" /> amy x huang</h1>
            {/* <img src="https://sdk.bitmoji.com/render/panel/965f4060-c8d0-4b02-8e05-45f7beb660eb-32f4148d-fa0e-4a7f-8810-f7e01716acf4-v1.png?transparent=1&palette=1" height="100px"/>amy x huang</h1> */}
            </a>
          <div id="nav">
            <a className="nav-item" href="/">home</a>
            <a className="nav-item" target="_" href="/art">sewing</a>
            <a className="nav-item" target="_" href="/weather"><img src={require("./images/cloud.png")} height="30px"/></a>

          </div>

          {/* <div id="social">
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
          </div> */}
        </header>
        <div className="main">
          <About />

         <Projects />
         <LoveCalc />
        </div>
      </div>
    );
  }

}

export default App;
