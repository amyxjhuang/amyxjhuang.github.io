import React from "react";
import Project from "./project.jsx";
import { Player } from "video-react";
import "./images/wheres-food.png";
// import "node_modules/video-react/dist/video-react.css"; // import css

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3>projects</h3>
        </div>
        <Project
          title="face detection & morphing"
          video={false}
          urlDesc="click here to see my process writeup!"
          desc="detecting face keypoints using a neural net, and morphing two faces together with Delauney triangulation and weighted cross-dissolving"
          imgsrc="https://media0.giphy.com/media/K4kA5ajpYUXY2glBsU/giphy.gif"
          link="https://inst.eecs.berkeley.edu/~cs194-26/fa20/upload/files/proj3/cs194-26-adv/"
          bulletList={[
            "trained neural net using PyTorch to detect facial keypoints",
            "used delauney triangulation to warp images into an average face",
            "computed 'mean face' of the danes dataset by averaging all faces in the population",
          ]}
        />
        <Project
          title="pill watch: capsule identifier and medication tracker"
          video={false}
          urlDesc="github repo"
          desc="fullstack application for users to track their medications and identify pills"
          imgsrc="https://i.imgur.com/CGzlQ9m.png"
          link="https://github.com/theoshiao/pillwatch"
          bulletList={[
            "integrate roboflow prediction model to identify capsule images",
            "postgresql database for user and drug profiles",
            "implement user authetication and 3rd party login options",
          ]}
        />
        <Project
          title="colorizing the prokudin-gorskii photo collection"
          video={false}
          urlDesc="click here to see my process writeup!"
          desc="image processing the digitized prokudin-gorskii glass pane photos into colored images using python"
          imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rgb-compose-Alim_Khan.jpg/2560px-Rgb-compose-Alim_Khan.jpg"
          link="https://inst.eecs.berkeley.edu/~cs194-26/fa20/upload/files/proj1/cs194-26-adv/cv_proj1/"
          bulletList={[
            "use SKImage.io library to process image",
            "align color channels using recursive image pyramid speedup and SSD",
          ]}
        />

        <Project
          title="constellation study rewards extension"
          video={false}
          urlDesc="click here to to download the application."
          desc="chrome extension application that blacklists distracting websites while you study and unlocks new constellations the more study sessions you complete! you can download constellation on the chrome web store from the link below."
          imgsrc="https://lh3.googleusercontent.com/cM9fM-6xkRwiHbMW06h0FqApGW4Fr0s-ntv_Zpd3gc2ec1dzsXramX1hb5INQTCypYuTa5jU2w=w640-h400-e365"
          link="https://github.com/roshie548/constellation.io/"
          bulletList={[
            "use firebase to store/keep track of user data",
            "google webrequest API to block user-specified webpages",
            "reactJS and FullPageJS to render extension",
          ]}
        />
        {/* <a href="/weather"> */}
        <Project
          title="reactJS weather forecast"
          video={false}
          urlDesc="click here to check the weather for this week!"
          desc="A dynamic web application that displays the weekly weather forcast for any searched city in the United States."
          imgsrc="https://i.imgur.com/fLWiP7S.png"
          link="https://amyxjhuang.github.io/weather"
          bulletList={[
            "Use ReactJS and Bootstrap library to render",
            "OpenWeather API to fetch weather data and images",
          ]}
        />
        {/* </a> */}
        <Project
          title="Burma! Burma! Website Redesign"
          video={false}
          urlDesc="Order their famous Burma Burma Noodle here :^)"
          desc="one of my favorite projects although not super technical. "
          imgsrc="https://i.imgur.com/0RmwiMM.png"
          link="https://www.burmaburma.com"
          bulletList={[
            "we used Figma and Squarespace to redesign!",
            "Increased website visits by 181% and page views by 313%",
            "Unique visitors increased by 212%, as documented on Squarespace analytics",
          ]}
        />
        <Project
          title="codeology website redesign"
          video={false}
          urlDesc="click here to view the website"
          desc="designed this website for my student organization using figma and react"
          imgsrc="https://i.imgur.com/99XL75j.png"
          link="https://codeology.club"
          bulletList={["Not too much to say! "]}
        />

        <Project
          title="Where's the Food?"
          video={false}
          urlDesc="Click here to see the website."
          desc="A shopping checklist and food navigator all in one! Check to see where and how long you've stored your groceries."
          imgsrc="https://i.imgur.com/LWWVr33.png"
          link="https://wheres-foood.web.app/"
          bulletList={["Use ReactJS and Bootstrap library to render"]}
        />
        <Project
          title="Night Shift Game"
          urlDesc="Click here to view a video playthrough"
          desc="Night Shift is an educational RPG featuring our favorite female artists. The player is represented by the janitor, protecting the art museum from theives. We did this project in 24 hours, and drew all sprite/background art by hand."
          video={true}
          imgsrc="https://i.imgur.com/Yp5PlLQ.png"
          link="https://amyxjhuang.github.io/nightshift.mp4"
          bulletList={[
            "Awarded 'Most Creative Project' at CodeDayLA 2019 with Reese Hirota and Annie Johnson",
            "Basic python script using the Pygames library",
            "Sprites designed in Adobe Photoshop",
          ]}
        />
      </div>
    );
  }
}
//https://amyxjhuang.github.io/weather.png
//https://lh3.googleusercontent.com/cM9fM-6xkRwiHbMW06h0FqApGW4Fr0s-ntv_Zpd3gc2ec1dzsXramX1hb5INQTCypYuTa5jU2w=w640-h400-e365

export default Projects;
