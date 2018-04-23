import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import CreateForm from "./components/CreateNewCharacter/CreateForm";
import CharacterView from "./components/ViewCharacters/CharacterView";
import { init as firebaseInit } from "./fire";

class App extends Component {
  constructor(props) {
    super(props);
    firebaseInit();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/create" component={CreateForm} />
          <Route path="/" component={CharacterView} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
