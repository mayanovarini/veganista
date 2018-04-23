import React from "react";
import AddDishForm from "./AddDishForm";
import EditDishForm from "./EditDishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.dishes).map(key => (
          <EditDishForm
            key={key}
            index={key}
            dish={this.props.dishes[key]}
            updateDish={this.props.updateDish}
            deleteDish={this.props.deleteDish}
          />
      ))}

        <AddDishForm addDish={this.props.addDish}/>
        <p className="chef-question"><span>Need some inspiration? </span><button className="green-button" onClick={this.props.loadSampleDishes}>Chef's Choice</button></p>

      </div>

    );
  }
}

export default Inventory;
