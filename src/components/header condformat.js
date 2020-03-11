//stzling options

import React, { Component } from "react";
import "../css/styles.css";

class HeaderCopy extends Component {
  state = {
    active: "active",
    keywords: ""
  };
  inputChangeHandler = event => {
    //to be able to use the state, instead of .bind(this) to the function that is calling it
    //console.log(event.target.value);
    const value = event.target.value === "" ? "active" : "non-active";
    this.setState({ active: value, keywords: event.target.value });
  };
  render() {
    //console.log(this.state.keywords);
    //const style = {
    //  background: "red"
    //};
    //if (this.state.keywords != "") {
    //  style.background = "blue";
    //}
    return (
      <header className={this.state.active}>
        <div className="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandler} />
      </header>
    );
  }
}

export default HeaderCopy;
