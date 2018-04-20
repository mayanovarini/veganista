import React from 'react';
import { formatPrice } from '../helpers';

class Dish extends React.Component {
  handleOrder = () => {
    this.props.addToOrder(this.props.index)
  }
  render() {
    const { image, name, price, desc, status } = this.props.details;

    const isUnavailable = status === "unavailable";

    return (
      <li className="menu-dish">
        <img src={image} alt={name} />
        <h3 className="dish-name">
          {name}
          <span>{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button onClick={this.handleOrder} disabled={isUnavailable}>
          {isUnavailable ? 'Sold Out' : 'Add to Order'}
        </button>
      </li>
    );
  }
}

export default Dish;
