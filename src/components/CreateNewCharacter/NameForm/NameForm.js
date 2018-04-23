import React, { Component } from "react";
import firebase from "firebase";
import { Redirect } from "react-router-dom";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
    this.handleInputChange.bind(this);
    this.state = {
      uuid: "lVz7e6IhQsgdPULZ1BowpuYbkWW2",
      name: "Tyler Wickline"
    };
    // this.database = database();
  }
  handleClick = e => {
    e.preventDefault();
    console.log(this.state);
    firebase
      .database()
      .ref("users/" + this.state.uuid)
      .set({
        name: this.state.name
      })
      .then(data => {
        this.setState({ next: true });
      })
      .catch(error => {
        alert(error);
      });
  };
  handleInputChange = e => {
    const targ = e.target;
    const value = targ.value;
    const name = targ.name;
    this.setState({
      [name]: value
    });
  };
  logoutOfGoogle = e => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Logged out!");
      })
      .catch(error => {
        console.log(error);
      });
  };
  loginWithGoogle = e => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        var token = result.credential.accessToken;
        var user = result.user;
        this.setState({
          token: token,
          uuid: user.uid
        });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(error, errorCode, errorMessage, email, credential);
      });
  };
  //   TODO: Change values back to normal.
  render() {
    if (this.state.next === true) {
      return <Redirect to="/character" />;
    }
    return (
      <React.Fragment>
        <button onClick={this.loginWithGoogle}>Login</button>
        <button onClick={this.logoutOfGoogle}>Logout</button>
        <form onSubmit={e => this.handleClick(e)} action="submit">
          <label htmlFor="email">ID associated with character: </label>
          <br />
          <input
            required
            readOnly
            name="uuid"
            type="text"
            value={this.state.uuid}
            onChange={this.handleInputChange}
          />
          <br />
          <label htmlFor="name">Player Name: </label>
          <br />
          <input
            required
            name="name"
            type={this.state.name}
            value="Tyler Wickline"
            onChange={this.handleInputChange}
          />
          <br />
          <hr />
          <button type="submit">Next</button>
        </form>
      </React.Fragment>
    );
  }
}

export default NameForm;
