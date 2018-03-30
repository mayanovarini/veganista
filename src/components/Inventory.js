import React from "react";
import AddDishForm from "./AddDishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddDishForm addDish={this.props.addDish}/>
      <button onClick={this.props.loadSampleDishes}>Load Sample</button>
      </div>

    );
  }
}

export default Inventory;
