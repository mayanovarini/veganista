import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  renderOrder = (key) => {
    const dish = this.props.dishes[key];
    const count = this.props.order[key];
    const isAvailable = dish && dish.status === 'available';

    // make sure the dish state loaded or syncronized by firebase
    if (!dish) {
      return null;
    }
    if(!isAvailable) {
      return <li key={key}>Sorry, the {dish ? dish.name : 'dish'} is no longer available :(</li>
    }
    return (
      <li key={key}>
        <span>{count} lbs {dish.name} - {formatPrice(count * dish.price)}</span>
        <button className="remove-order" onClick={() => this.props.removeDishFromOrder(key)}>&times;</button>
      </li>

    );
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const dish = this.props.dishes[key];
      const count = this.props.order[key];
      const isAvailable = dish && dish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * dish.price)
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          <span>Total: {formatPrice(total)}</span>
        </div>
      </div>
    )
  }
}

export default Order;
