import React from 'react';
import LoveForm from './love-form.jsx'
import './App.css'

class LoveCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personA: {
        name: "",
        age: -1,
        sign: "",
        briggs: ""
      },
      personB: {
        name: "",
        age: -1,
        sign: "",
        briggs: ""
      },
      score: 0,
      result: "",
      subresult: ""
    }
  }

  loadFormInfo = (person, info) => {

      if (person === "Person #1") {
        this.setState({personA: info})
      } else {
        this.setState({personB: info})
      }
  }

  calcAgeScore = (A, B) => {
    if (A > B) {
      return this.calcAgeScore(B,A);
    } // B > A
    var score = (A===B)? 25 : 25 / (B - A);
    if (B / 2 + 7 > A) {
      score = 0;
    }
    return score;
  }

  calcAstrology = () => {
    var DATA = {"Aries": {"Aries": 60, "Taurus": 65, "Gemini": 65, "Cancer": 65, "Leo": 90, "Virgo": 45, "Libra": 70, "Scorpio": 80, "Sagittarius":90, "Capricorn": 50, "Aquarius": 55, "Pisces": 65},
                "Taurus": {"Aries": 60, "Taurus": 70, "Gemini": 70, "Cancer": 80, "Leo": 70, "Virgo": 90, "Libra": 60, "Scorpio": 85, "Sagittarius":50, "Capricorn": 95, "Aquarius": 80, "Pisces": 85},
                "Gemini": {"Aries": 70, "Taurus": 70, "Gemini": 75, "Cancer": 60, "Leo": 80, "Virgo": 75, "Libra": 60, "Scorpio": 60, "Sagittarius":75, "Capricorn": 50, "Aquarius": 90, "Pisces": 50},
                "Cancer": {"Aries": 65, "Taurus": 80, "Gemini": 60, "Cancer": 75, "Leo": 70, "Virgo": 75, "Libra": 60, "Scorpio": 95, "Sagittarius":55, "Capricorn": 45, "Aquarius": 70, "Pisces": 90},
                "Leo": {"Aries": 90, "Taurus": 70, "Gemini": 80, "Cancer": 70, "Leo": 85, "Virgo": 75, "Libra": 65, "Scorpio": 75, "Sagittarius":95, "Capricorn": 45, "Aquarius": 70, "Pisces": 75},
                "Virgo": {"Aries": 45, "Taurus": 90, "Gemini": 75, "Cancer": 75, "Leo": 75, "Virgo": 70, "Libra": 80, "Scorpio": 85, "Sagittarius":70, "Capricorn": 95, "Aquarius": 50, "Pisces": 70},
                "Libra": {"Aries": 70, "Taurus": 75, "Gemini": 90, "Cancer": 60, "Leo": 65, "Virgo": 80, "Libra": 80, "Scorpio": 85, "Sagittarius":80, "Capricorn": 85, "Aquarius": 95, "Pisces": 50},
                "Scorpio": {"Aries": 80, "Taurus": 85, "Gemini": 60, "Cancer": 95, "Leo": 75, "Virgo": 85, "Libra": 90, "Scorpio": 90, "Sagittarius":80, "Capricorn": 65, "Aquarius": 60, "Pisces": 95},
                "Sagittarius": {"Aries": 90, "Taurus": 50, "Gemini": 75, "Cancer": 55, "Leo": 95, "Virgo": 70, "Libra": 80, "Scorpio": 85, "Sagittarius":85, "Capricorn": 55, "Aquarius": 60, "Pisces": 75},
                "Capricorn": {"Aries": 50, "Taurus": 95, "Gemini": 50, "Cancer": 45, "Leo": 45, "Virgo": 95, "Libra": 85, "Scorpio": 65, "Sagittarius":55, "Capricorn": 85, "Aquarius": 70, "Pisces": 85},
                "Aquarius": {"Aries": 55, "Taurus": 80, "Gemini": 90, "Cancer": 70, "Leo": 70, "Virgo": 50, "Libra": 95, "Scorpio": 60, "Sagittarius":60, "Capricorn": 70, "Aquarius": 80, "Pisces": 55},
                "Pisces": {"Aries": 65, "Taurus": 85, "Gemini": 50, "Cancer": 90, "Leo": 75, "Virgo": 70, "Libra": 50, "Scorpio": 95, "Sagittarius":75, "Capricorn": 85, "Aquarius": 55, "Pisces": 80},}
    var perA = this.state.personA.sign;
    var perB = this.state.personB.sign;
    return DATA[perA][perB];
  }

  calcPersonalityScore = (A, B) => {
    var great = 100;
    var good = 70;
    var medium = 40;
    var bad = 10;
    var DATA = {"INFP": {"INFP": good, "ENFP": good, "INFJ": good, "ENFJ": great, "INTJ": good, "ENTJ": great, "INTP": good, "ENTP": good, "ISFP":bad, "ESFP": bad, "ISTP": bad, "ESTP": bad, "ISFJ": bad, "ESFJ": bad, "ISTJ": bad, "ESTJ": bad},
                "ENFP": {"INFP": good, "ENFP": good, "INFJ": great, "ENFJ": good, "INTJ": great, "ENTJ": good, "INTP": good, "ENTP": good, "ISFP": bad, "ESFP": bad, "ISTP": bad, "ESTP": bad, "ISFJ": bad, "ESFJ": bad, "ISTJ": bad, "ESTJ": bad},
                "INFJ": {"INFP": good, "ENFP": great, "INFJ": good, "ENFJ": good, "INTJ": good, "ENTJ": good, "INTP": good, "ENTP": great, "ISFP": bad, "ESFP": bad, "ISTP": bad, "ESTP": bad, "ISFJ": bad, "ESFJ": bad, "ISTJ": bad, "ESTJ": bad},
                "ENFJ": {"INFP": great, "ENFP": good, "INFJ": good, "ENFJ": good, "INTJ": good, "ENTJ": good, "INTP": good, "ENTP": good, "ISFP": great, "ESFP": bad, "ISTP": bad, "ESTP": bad, "ISFJ": bad, "ESFJ": bad, "ISTJ": bad, "ESTJ": bad},
                "INTJ": {"INFP": good, "ENFP": great, "INFJ": good, "ENFJ": good, "INTJ": good, "ENTJ": good, "INTP": good, "ENTP": great, "ISFP": bad, "ESFP": bad, "ISTP": bad, "ESTP": bad, "ISFJ": medium, "ESFJ": medium, "ISTJ": medium, "ESTJ": medium},
                "ENTJ": {"INFP": great, "ENFP": good, "INFJ": great, "ENFJ": good, "INTJ": great, "ENTJ": good, "INTP": great, "ENTP": good, "ISFP": bad, "ESFP": bad, "ISTP": bad, "ESTP": bad, "ISFJ": bad, "ESFJ": bad, "ISTJ": bad, "ESTJ": bad},
                "INTP": {"INFP": good, "ENFP": good, "INFJ": good, "ENFJ": good, "INTJ": good, "ENTJ": great, "INTP": good, "ENTP": good, "ISFP": bad, "ESFP": bad, "ISTP": bad, "ESTP": medium, "ISFJ": bad, "ESFJ": medium, "ISTJ": medium, "ESTJ": great},
                "ENTP": {"INFP": good, "ENFP": good, "INFJ": great, "ENFJ": good, "INTJ": great, "ENTJ": good, "INTP": good, "ENTP": good, "ISFP": bad, "ESFP": bad, "ISTP": bad, "ESTP": bad, "ISFJ": medium, "ESFJ": medium, "ISTJ": medium, "ESTJ": medium},
                "ISFP": {"INFP": bad, "ENFP": bad, "INFJ": bad, "ENFJ": great, "INTJ": bad, "ENTJ": bad, "INTP": bad, "ENTP": bad, "ISFP": medium, "ESFP": medium, "ISTP": medium, "ESTP": medium, "ISFJ": bad, "ESFJ": great, "ISTJ": bad, "ESTJ": great},
                "ESFP": {"INFP": bad, "ENFP": bad, "INFJ": bad, "ENFJ": bad, "INTJ": bad, "ENTJ": bad, "INTP": bad, "ENTP": bad, "ISFP": medium, "ESFP": medium, "ISTP": medium, "ESTP": medium, "ISFJ": great, "ESFJ": bad, "ISTJ": great, "ESTJ": bad},
                "ISTP": {"INFP": bad, "ENFP": bad, "INFJ": bad, "ENFJ": bad, "INTJ": bad, "ENTJ": bad, "INTP": bad, "ENTP": bad, "ISFP": medium, "ESFP": medium, "ISTP": medium, "ESTP": medium, "ISFJ": bad, "ESFJ": great, "ISTJ": bad, "ESTJ": great},
                "ESTP": {"INFP": bad, "ENFP": bad, "INFJ": bad, "ENFJ": bad, "INTJ": bad, "ENTJ": bad, "INTP": bad, "ENTP": bad, "ISFP": medium, "ESFP": medium, "ISTP": medium, "ESTP": medium, "ISFJ": great, "ESFJ": bad, "ISTJ": great, "ESTJ": bad},
                "ISFJ": {"INFP": bad, "ENFP": bad, "INFJ": bad, "ENFJ": bad, "INTJ": medium, "ENTJ": bad, "INTP": medium, "ENTP": medium, "ISFP": bad, "ESFP": great, "ISTP": bad, "ESTP": great, "ISFJ": good, "ESFJ": good, "ISTJ": good, "ESTJ": good},
                "ESFJ": {"INFP": bad, "ENFP": bad, "INFJ": bad, "ENFJ": bad, "INTJ": medium, "ENTJ": bad, "INTP": medium, "ENTP": medium, "ISFP": great, "ESFP": bad, "ISTP": great, "ESTP": bad, "ISFJ": good, "ESFJ": good, "ISTJ": good, "ESTJ": good},
                "ISTJ": {"INFP": bad, "ENFP": bad, "INFJ": bad, "ENFJ": bad, "INTJ": medium, "ENTJ": bad, "INTP": medium, "ENTP": medium, "ISFP": bad, "ESFP": great, "ISTP": bad, "ESTP": great, "ISFJ": good, "ESFJ": good, "ISTJ": good, "ESTJ": good},
                "ESTJ": {"INFP": bad, "ENFP": bad, "INFJ": bad, "ENFJ": bad, "INTJ": medium, "ENTJ": bad, "INTP": great, "ENTP": medium, "ISFP": great, "ESFP": bad, "ISTP": great, "ESTP": bad, "ISFJ": good, "ESFJ": good, "ISTJ": good, "ESTJ": good}}
    var perA = this.state.personA.briggs;
    var perB = this.state.personB.briggs;
    return DATA[perA][perB];
  }

  calculate = (person, info) => {
    var A = this.state.personA;
    var B = this.state.personB;
    if (A === B) {
      this.setState({score: 1000000,
                     result: "Yeah, you're right! You don't need a lover- you are perfect by yourself xD"});
    }
    else if (((A.age < 18 && B.age > 17) || (B.age < 18 && A.age > 17)) && Math.abs(A.age-B.age) > 2) {
      this.setState({score: 0,
                     result: "That would be considered pedophilia please don't."});
    }
    else if(A.name === "Darren Lin" || B.name === "Darren Lin") {
      this.setState({score:-100, result:"Is this a mistake? Darren would obviously never find love lol. Try again."})
    }
    else{

      var score = this.calcAgeScore(A.age, B.age) + this.calcPersonalityScore(A, B) + this.calcAstrology();
      console.log(score);
      var result;
      var subresults = `Age score: ${this.calcAgeScore(A.age, B.age)}/25\t\nPersonality score: ${this.calcPersonalityScore(A, B)}/100\n\tAstrology score: ${this.calcAstrology()}/95`
      if (score < 55) {
        result = "\nOverall analysis: Not compatible at all. I think you should find someone new."
      } else if (score < 70) {
        result = "\nOverall analysis: Not compatible. Try someone with a different personality I guess"
      } else if (score < 90) {
        result = "\nOverall analysis: Not very compatible. Email me if you want to argue amyxjhuang@gmail.com"
      } else if (score < 110) {
        result = `\nOverall analysis: Neutral. ${this.state.personA.name} and ${this.state.personB.name} would be around average. `
      } else if (score < 130) {
        result = "\nOverall analysis: Pretty compatible. You guys would be an average couple. Nice!"
      } else if (score < 160) {
        result = "\nOverall analysis: Compatible!"
      } else {
        result = `\nOverall analysis: Perfect match <3 ${this.state.personA.name} and ${this.state.personB.name} are extremely compatible. You should date!`
      }
      this.setState({score: score, result: result, subresult: subresults});

    }
    // var score = this.calcAgeScore(A.age, B.age) + this.calcPersonalityScore(A, B) + this.calcAstrology();
    // this.setState({score: score});


  }

  render() {
      return(

        <div className="container">
        <h3> love calculator </h3>
                
<p style={{paddingLeft: "10vw"}}> find out if u shud date ur lover...</p>
        <center>
        <div className="row">
          <img src={require("./images/straw2.png")} height="100px"/>

          <LoveForm submit={this.loadFormInfo} person="Person #1"/>
          <LoveForm submit={this.loadFormInfo} person="Person #2"/>
          <img src={require("./images/straw1.png")} height="100px"/>

        </div>
        </center>

        <button style={{marginLeft: "60vw"}}  onClick={this.calculate}>calculate score!</button>
        <h3>score: {this.state.score}</h3>
        <p style={{paddingLeft: "10vw"}}>{this.state.subresult}</p>
        <h3 style={{paddingLeft: "10vw"}}>{this.state.result}</h3>
        </div>

      );

  }
}


export default LoveCalc;
