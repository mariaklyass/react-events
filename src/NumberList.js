import React, { Component } from "react";
import NumberItem from "./NumberItem";
import "./NumberList.css";

export default class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
  }
  remove(num) {
    this.setState((st) => ({
      nums: st.nums.filter((n) => n !== num),
    }));
  }

  render() {
    let nums = this.state.nums.map((n) => (
      <NumberItem value={n} remove={() => this.remove(n)} />
    ));
    return (
      <div className="NumberList">
        <h1> Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}
