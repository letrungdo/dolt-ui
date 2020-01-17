import React from "react";
import "./style.css";

const Card = props => {
  return React.createElement("div", {
    className: "card"
  }, props.children);
};

export default Card;