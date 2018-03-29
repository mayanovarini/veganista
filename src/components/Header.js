import React from "react";
import OrderOwner from "./OrderOwner";

const Header = props => (
  <header className="top">
    <h1>{props.name}'s Ingredients Today</h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

export default Header;
