import React from "react";

class AddDishForm extends React.Component {

  createDish = event => {
    event.preventDefault;
    console.log("adding dish");
  }

  render() {
    return (
      <form className="dish-edit" onSubmit={this.createDish}>
        <input name="name" type="text" placeholder="Name" />
        <input name="price" type="text" placeholder="Price" />
        <select name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" placeholder="Desc" />
        <input name="image" type="text" placeholder="Image" />
        <button type="submit">+ Add Dish</button>
      </form>
    );
  }
}

export default AddDishForm;
