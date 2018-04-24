import React from 'react';

class EditDishForm extends React.Component {
  handleChange = (e) => {
    const updatedDish = {
      ...this.props.dish,
      [e.currentTarget.name]: e.currentTarget.value
     };
    this.props.updateDish(this.props.index, updatedDish);
  }
  render() {
    return (
      <div className="dish-edit">
        <input name="name" type="text" placeholder="Name" onChange={this.handleChange} value={this.props.dish.name} />
        <input name="price" type="text" placeholder="Price" onChange={this.handleChange} value={this.props.dish.price} />
        <select name="status" onChange={this.handleChange} value={this.props.dish.status} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" placeholder="Desc" onChange={this.handleChange} value={this.props.dish.desc} />
        <input name="image" type="text" placeholder="Image" onChange={this.handleChange} value={this.props.dish.image} />
        <p className="remove-dish" onClick={() => this.props.deleteDish(this.props.index)}>Remove Dish</p>
      </div>
    );
  }
}

export default EditDishForm;
