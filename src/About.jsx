import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
        <div className="container">
        
          <div className="row">
          <div className="container">
          <h3>
          {/* <img src={require("./images/flower.png")} height="50px"/> */}
        about me</h3>
          {/* <div style={{color:"#685344"}}><i >software developer based in </i><img height="20px" src="https://static.thenounproject.com/png/1832-200.png" /> <i>manhattan nyc</i></div> */}

              <p><br/>hello! :)  my name is Amy Huang, & i love all things arts n crafts n coding. i'm a recent grad at uc berkeley with a bachelor's in computer science! 
                this year i will also be starting work at pinterest as a fullstack software developer based in nyc.  </p>
              <p>you can reach out to me by email at amyxjhuang@berkeley.edu, and check out my <a href="https://tinyurl.com/amyhuangresume"> resume here</a></p>
              <p>this website was created w/ reactjs, design & icons created w/ figma</p>
          </div>
          <img id="faceimg" src={require("./images/mes.png")}/>
          </div>
        </div>
      );
  }
}

export default About;
