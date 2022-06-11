import React from 'react';
import Project from './project.jsx'
import { Player } from 'video-react';
import './images/wheres-food.png';
// import "node_modules/video-react/dist/video-react.css"; // import css

class Projects extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    if (this.props.currentTab === "projects") {
      console.log("render");
      return (
        <div>
        <h1 className="container">projects</h1>
          <div className="container">


                 <p> I really like working on web projects (as you can probably tell) and I've learned a lot from this during my time in college. </p>
                 <p>These are some programming projects that I've worked on this year. Check out the
                    github <a href="https://github.com/amyxjhuang"> here</a>. If you want to see past versions of this
                    website, here's mine from <a href="https://amyxjhuang.github.io">1 year ago</a> and my first
                    website from <a href="amyxjhuang.appspot.com">2 years ago</a>!</p>

              </div>
              <Project title="Face Detection & Morphing"
                       video={false}
                       urlDesc="Click here to see my process writeup!"
                       desc="Detecting face keypoints using a neural net, and morphing two faces together with Delauney triangulation and weighted cross-dissolving"
                       imgsrc="https://media0.giphy.com/media/K4kA5ajpYUXY2glBsU/giphy.gif"
                       link="https://inst.eecs.berkeley.edu/~cs194-26/fa20/upload/files/proj3/cs194-26-adv/"
                       bulletList={["Trained neural net using PyTorch to detect facial keypoints", "Used Delauney triangulation to warp images into an average face", "Computed 'mean face' of the Danes dataset by averaging all faces in the population"]} />
              <Project title="Constellation Study Rewards Extension"
                       video={false}
                       urlDesc="Click here to see the ReadMe and to download the application."
                       desc="A Chrome extension application that blacklists distracting websites while you study and unlocks new constellations the more study sessions you complete! You can download Constellation on the Chrome Web Store from the link below."
                       imgsrc="https://lh3.googleusercontent.com/cM9fM-6xkRwiHbMW06h0FqApGW4Fr0s-ntv_Zpd3gc2ec1dzsXramX1hb5INQTCypYuTa5jU2w=w640-h400-e365"
                       link="https://github.com/roshie548/constellation.io/"
                       bulletList={["Use Firebase to store/keep track of user data", "Google webrequest API to block user-specified webpages", "ReactJS and FullPageJS to render extension"]} />
             <Project title="Colorizing the Prokudin-Gorskii Photo Collection"
                       video={false}
                       urlDesc="Click here to see my process writeup!"
                       desc="Image processing the digitized Prokudin-Gorskii glass pane photos into colored images using Python"
                       imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rgb-compose-Alim_Khan.jpg/2560px-Rgb-compose-Alim_Khan.jpg"
                       link="https://inst.eecs.berkeley.edu/~cs194-26/fa20/upload/files/proj1/cs194-26-adv/cv_proj1/"
                       bulletList={["Use SKImage.io library to process image", "Align color channels using recursive image pyramid speedup and SSD"]} />
             <a onClick={() => this.props.changeTab("weather")}>
             <Project title="ReactJS Weather Forecast"
                      video={false}
                      urlDesc="Click here to see the Github repo."
                      desc="A dynamic web application that displays the weekly weather forcast for any searched city in the United States."
                      imgsrc="https://amyxjhuang.github.io/weather.png"
                      link="https://github.com/amyxjhuang/weather"
                      bulletList={["Use ReactJS and Bootstrap library to render", "OpenWeather API to fetch weather data and images"]} />
                </a>
            <Project title="Burma! Burma! Website Redesign"
                    video={false}
                    urlDesc="Order their famous Burma Burma Noodle here :^)"
                    desc="One of my favorite projects although not super technical. "
                    imgsrc="https://i.imgur.com/0RmwiMM.png"
                    link="https://www.burmaburma.com"
                    bulletList={["We used Figma and Squarespace to redesign!", "Increased website visits by 181% and page views by 313%", "Unique visitors increased by 212%, as documented on Squarespace analytics"]} />
          

            <Project title="Bay Area Maps"
                       urlDesc=""
                      video={false}
                       desc="A Google Maps-like application with zoom and navigation functionality."
                       imgsrc="https://amyxjhuang.github.io/bearmaps.png"
                       link=""
                       bulletList={["Java data structures & algorithms for backend", "Image rasterization to search and stitch together image files","Used A* shortest-path algorithm for navigation and trie data structure for autocomplete search"]} />
           <Project title="Codeology Website Redesign"
                    video={false}
                    urlDesc="Click here to view the website"
                    desc="Designed this website for my student organization using Figma and React"
                    imgsrc="https://i.imgur.com/99XL75j.png"
                    link="https://codeology.club"
                    bulletList={["Not too much to say! "]} />


            <Project title="Where's the Food?"
                      video={false}
                       urlDesc="Click here to see the website."
                       desc="A shopping checklist and food navigator all in one! Check to see where and how long you've stored your groceries."
                       imgsrc="https://i.imgur.com/LWWVr33.png"
                       link="https://wheres-foood.web.app/"
                       bulletList={["Use ReactJS and Bootstrap library to render"]} />
           <Project title="Night Shift Game"
                      urlDesc="Click here to view a video playthrough"
                      desc="Night Shift is an educational RPG featuring our favorite female artists. The player is represented by the janitor, protecting the art museum from theives. We did this project in 24 hours, and drew all sprite/background art by hand."
                      video={true}
                      imgsrc="https://i.imgur.com/Yp5PlLQ.png"
                      link="https://amyxjhuang.github.io/nightshift.mp4"
                      bulletList={["Awarded 'Most Creative Project' at CodeDayLA 2019 with Reese Hirota and Annie Johnson","Basic python script using the Pygames library", "Sprites designed in Adobe Photoshop"]} />

        </div>
      );
    }
    else {
      return(<div></div>);
    }
  }
}
//https://amyxjhuang.github.io/weather.png
//https://lh3.googleusercontent.com/cM9fM-6xkRwiHbMW06h0FqApGW4Fr0s-ntv_Zpd3gc2ec1dzsXramX1hb5INQTCypYuTa5jU2w=w640-h400-e365

export default Projects;
