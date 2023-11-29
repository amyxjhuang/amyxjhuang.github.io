import React from "react";
import "./App.css";
// import { Player } from 'video-react';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var bulletList = this.props.bulletList.map((b) => <li key={b}>{b}</li>);
    var imgVid = <img className="proj-img" src={this.props.imgsrc} />;

    return (
        <div className="project-container">
        <h4>{this.props.title}</h4>
        <p>{this.props.desc}</p>
              <div className="proj-columns">

        <div className="proj-col">
          <a target="_blank" href={this.props.link}> {imgVid}</a>
        </div>
        <div className="proj-col">
        
          <div>
            <a target="_blank" href={this.props.link}> {this.props.urlDesc} </a>

            <div className="proj-bullets">
              <ul>{bulletList}</ul>
            </div>
          </div>
        </div>
                </div>

      </div>
    );
  }
}
// <img src={this.props.imgsrc} />

export default Project;
