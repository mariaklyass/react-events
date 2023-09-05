import React, { Component } from "react";
import "./ButtonList.css";

class ButtonList extends Component {
  static defaultProps = {
    colors: ["#c6a8b8", "#c1d29f", "#f6f0e0", "#6778a2"],
  };

  constructor(props) {
    super(props);
    this.state = { color: "#8b8785" };
  }

  changeColor(newColor) {
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div>
        <h1>Color Boxes</h1>
        <div
          className="ButtonList"
          style={{ backgroundColor: this.state.color }}
        >
          {this.props.colors.map((c) => {
            const colorObj = { backgroundColor: c };
            return (
              <button style={colorObj} onClick={this.changeColor.bind(this, c)}>
                Click on me!
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ButtonList;
