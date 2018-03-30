import React from "react";
import AddDishForm from "./AddDishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddDishForm />
      </div>
    );
  }
}

export default Inventory;
