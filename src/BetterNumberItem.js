import React, { Component } from "react";
import "./NumberItem.css";

export default class BetterNumberItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(e) {
    this.props.remove(this.props.value);
  }
  render() {
    return (
      <li className="NumberItem">
        {this.props.value}
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}
