import React, { Fragment } from "react";
import { getFunName } from "../helpers";

class OrderOwner extends React.Component {
  myInput = React.createRef();

  goToOwner = event => {
    event.preventDefault();

    const ownerName = this.myInput.current.value;

    this.props.history.push(`/owner/${ownerName}`);
  };

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToOwner}>
          <h2>Your Shopper Today is :</h2>
          <h2>{getFunName()}</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Your Name"
          />
          <button type="submit">Send Your Order</button>
        </form>
      </Fragment>
    );
  }
}

export default OrderOwner;
