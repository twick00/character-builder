import React, { Component } from "react";

class CharacterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { classes: [], races: [] };
  }
  componentDidMount() {
    fetch("http://www.dnd5eapi.co/api/classes")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ classes: data.results });
      })
      .catch(error => {
        console.log(error);
      });
    fetch("http://www.dnd5eapi.co/api/races")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ races: data.results });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <React.Fragment>
        <select>
          {this.state.classes.map((c, i) => (
            <option key={"class-" + i}>{c.name}</option>
          ))}
        </select>
        <select>
          {this.state.races.map((r, i) => (
            <option key={"race-" + i}>{r.name}</option>
          ))}
        </select>
      </React.Fragment>
    );
  }
}

export default CharacterForm;
