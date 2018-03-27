import React, { Fragment } from 'react';

class StorePicker extends React.Component {

  render() {
    return (
      <Fragment>
      <form className="store-selector">
        <h2>Type Your Name & Your Shopper's Name</h2>
        <input type="text" required placeholder="Your Name" />
        <input type="text" required placeholder="Shopper's Name" />
        <button type="submit">Send Your Order</button>
      </form>
      </Fragment>
    )
  }
}

export default StorePicker;
