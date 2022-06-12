import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
        <div>
        <h1 className="container">about me</h1>
            {/* <div><i>software developer based in the </i><img height="20px" src="https://static.thenounproject.com/png/1832-200.png" /> <i>san francisco bay area</i></div> */}

          <div className="container">

              <p>Hello :) ! My name is Amy Huang, and I am a 3rd-year student at <a href="https://berkeley.edu">The University of California,
              Berkeley</a> majoring in Computer Science. I'll be interning at Facebook for summer 2021 and Snap Inc for fall 2021!</p>

              <p>I grew up in southern California and have a background in visual arts. Currently I am working on
              a pro-bono project as a software developer for Seawarden.io at <a href="https://codeology.club"> Codeology</a>. This
              semester I am also a Project Manager for Outhrive's web design project for Burma! Burma!, a local Burmese restaurant. We just finished their 
              main location <a href="https://www.burmaburma.com">here!</a> We increased the web traffic by 212% and are working on their other 2 locations now!

              This past summer I worked on iOS development at <a href="https://snap.com">Snap Inc</a> in the Client
              Platform & Frameworks team.</p>

              <p>You can reach out to me by email at amyxjhuang@berkeley.edu, and check out my <a href="https://tinyurl.com/amyhuangresume"> resume</a> here.</p>
          </div>
          <img id="faceimg" src={require("./images/me.png")}/>

        </div>
      );
  }
}

export default About;
