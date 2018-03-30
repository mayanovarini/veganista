import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import menu from '../sample-dishes';

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

  render() {
    return (
      <div className="veganista">
        <div className="menu">
          <Header
            name={this.props.match.params.ownerId}
            tagline="Fresh, Healthy & Vegan!"
          />
        </div>
        <Order />
        <Inventory addDish={this.addDish} loadSampleDishes={this.loadSampleDishes}/>
      </div>
    );
  }
}

export default App;
