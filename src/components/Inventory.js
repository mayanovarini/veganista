import React from "react";
import AddDishForm from "./AddDishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddDishForm addDish={this.props.addDish}/>
        <p className="chef-question">Need some inspiration? <button onClick={this.props.loadSampleDishes}>Chef's Choice</button></p>

      </div>

    );
  }
}

export default Inventory;
