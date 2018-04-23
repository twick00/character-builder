import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import NameForm from "./NameForm/NameForm";
import CharacterForm from "./CharacterForm/CharacterForm";

class CreateForm extends Component {
  constructor(props, { match }) {
    super(props);
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={NameForm} />
          <Route exact path="/character" component={CharacterForm} />
        </Switch>
      </HashRouter>
    );
  }
}

export default CreateForm;
