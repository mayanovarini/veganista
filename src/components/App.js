import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import menu from '../sample-dishes';
import Dish from './Dish';

class App extends React.Component {
  state = {
    dishes: {},
    order: {}
  };

  addDish = (dish) => {
    const dishes = {...this.state.dishes}; // shallow copy the state and spread it
    dishes[`dish${Date.now()}`] = dish;

    this.setState({
      dishes
    })
  }

  loadSampleDishes = () => {
    this.setState({
      dishes: menu
    });
  }

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  render() {
    return (
      <div className="veganista">
        <div className="menu">
          <Header
            name={this.props.match.params.ownerId}
            tagline="Fresh, Healthy & Vegan!"
          />
          <ul className="dishes">
            {Object.keys(this.state.dishes).map(key => (
              <Dish key={key}
                index={key}
                details={this.state.dishes[key]}
                addToOrder={this.addToOrder}
              />)
            )}
          </ul>
        </div>
        <Order />
        <Inventory addDish={this.addDish} loadSampleDishes={this.loadSampleDishes}/>
      </div>
    );
  }
}

export default App;
