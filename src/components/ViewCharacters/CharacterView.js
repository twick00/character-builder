import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class CharacterView extends Component {
  componentWillMount() {
    //TODO: Get data from server.
  }

  render() {
    return <Redirect to="/create" />;
    {
      /* <div>CharacterView</div>; */
    }
  }
}

export default CharacterView;
