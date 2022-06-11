import React from 'react';
import './App.css'

class LoveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      sign: "Aries",
      briggs: "ISTJ"
    }
  }

  handleInputChange= (event) =>{
    const target = event.target;
    if (target.name === 'age'){
      this.setState({age: parseInt(target.value)})
    } else {
      const name = target.name;
      this.setState({[name]: target.value})
    }
    this.props.submit(this.props.person, this.state)

  }

  render() {

    return (
      <div className="love-calc">
      <h2>{this.props.person}</h2>
      <form>
        <label>
           Name:
          <input
            name="name"
            value={this.state.name}
            type="string"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Age:
          <input
            name="age"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
           Star Sign:
           <select value={this.state.sign} type="string" name="sign" onChange={this.handleInputChange}>
            <option value="Aries">Aries</option>
            <option value="Leo">Leo</option>
            <option value="Saagittaarius">Saagittarius</option>
            <option value="Taurus">Taurus</option>
            <option value="Virgo">Virgo</option>
            <option value="Capricorn">Capricorn</option>
            <option value="Gemini">Gemini</option>
            <option value="Libra">Libra</option>
            <option value="Aquarius">Aquarius</option>
            <option value="Cancer">Cancer</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Pisces">Pisces</option>
          </select>
        </label>
        <br />
        <label>
           Personality Type:
           <select value={this.state.briggs} type="string" name="briggs" onChange={this.handleInputChange}>
            <option value="ISTJ">ISTJ - The Inspector</option>
            <option value="ISTP">ISTP - The Crafter</option>
            <option value="ISFJ">ISFJ - The Protector</option>
            <option value="ISFP">ISFP - The Artist</option>
            <option value="INFJ">INFJ - The Advocate</option>
            <option value="INFP">INFP - The Mediator</option>
            <option value="INTJ">INTJ - The Architect</option>
            <option value="INTP">INTP - The Thinker</option>
            <option value="ESTP">ESTP - The Persuader</option>
            <option value="ESTJ">ESTJ - The Director</option>
            <option value="ESFP">ESFP - The Performer</option>
            <option value="ESFJ">ESFJ - The Caregiver</option>
            <option value="ENFP">ENFP - The Champion</option>
            <option value="ENFJ">ENFJ - The Giver</option>
            <option value="ENTP">ENTP - The Debater</option>
            <option value="ENTJ">ENTJ - The Commander</option>
          </select>
        </label>
        <br />
      </form>
      </div>
    );
  }
}
//      {this.props.person === "Person #2" ? <button onClick={() => this.props.submit(this.props.person, this.state)}>Submit</button> : <br />}


export default LoveForm;
