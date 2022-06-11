import React from 'react';
import './App.css'
import { Player } from 'video-react';


class Project extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var bulletList = this.props.bulletList.map((b) =>
      <li>{b}</li>
    );
    var imgVid =  <img className="proj-img" src={this.props.imgsrc}/>

    return(

      <div className="project-container">

       <div className="proj-desc">

            <a href={this.props.link}> {imgVid}</a></div>
        <div className="proj-desc">
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
          <a href={this.props.link}> {this.props.urlDesc} </a>

          <div className="proj-bullets"><ul>{bulletList}</ul></div>
          </div>
        </div>
      </div>
    );
  }
}
// <img src={this.props.imgsrc} />


export default Project;
