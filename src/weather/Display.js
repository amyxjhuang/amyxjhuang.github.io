import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import Day from './Day';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import styled, {css} from 'styled-components'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class Display extends React.Component {
    constructor(props) {
      super(props);
    }

    render (props) {
      if (!this.props.searched) {
        return (<p className="center"> Search your city. </p>);
      } else if (this.props.error) {
        return (<p className='center'> City not found. </p>);
      } else {
        return (
          <Jumbotron>
        <h2 align="left">
        {this.props.city.toUpperCase()}'s Forecast
        </h2>
        <center>
        <Row>
          <Col>
          <Day description={this.props.description[0]}
               temp_max={this.props.temp_max[0]}
               temp_min={this.props.temp_min[0]}
               time={this.props.time[0]}
               icon={this.props.icon[0]}/>
          </Col>
          <Col>
          <Day description={this.props.description[1]}
               temp_max={this.props.temp_max[1]}
               temp_min={this.props.temp_min[1]}
               time={this.props.time[1]}
               icon={this.props.icon[1]}/>
          </Col>
          <Col>
          <Day description={this.props.description[2]}
               temp_max={this.props.temp_max[2]}
               temp_min={this.props.temp_min[2]}
               time={this.props.time[2]}
               icon={this.props.icon[2]}/>
          </Col>
          <Col>
          <Day description={this.props.description[3]}
               temp_max={this.props.temp_max[3]}
               temp_min={this.props.temp_min[3]}
               time={this.props.time[3]}
               icon={this.props.icon[3]}/>
          </Col>
          <Col>
          <Day description={this.props.description[4]}
               temp_max={this.props.temp_max[4]}
               temp_min={this.props.temp_min[4]}
               time={this.props.time[4]}
               icon={this.props.icon[4]}/>
        </Col>
        </Row></center>
        </Jumbotron>
        )

    }
  }

}

export default Display;
