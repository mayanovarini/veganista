import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import menu from '../sample-dishes';
import Dish from './Dish';
import base from '../base';

class App extends React.Component {
  state = {
    dishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    // local storage will grab the value using the ownerId as the key
    const localStorageRef = localStorage.getItem(params.ownerId)
    console.log("local storage", localStorageRef)
    if(localStorageRef){
      this.setState({ order: JSON.parse(localStorageRef)})
    }
    // getting the store name ID from the props of the App made by Route
    this.ref = base.syncState(`${params.ownerId}/dishes`, {
      context: this,
      state: 'dishes'
    });
  }

  componentDidUpdate() {
    console.log("it updated with", this.state.order)
    // persist in local storage, passing in two arguments - key (ownerId) value (order) pair
    localStorage.setItem(this.props.match.params.ownerId, JSON.stringify(this.state.order))
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

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
        <Order dishes={this.state.dishes} order={this.state.order}/>
        <Inventory addDish={this.addDish} loadSampleDishes={this.loadSampleDishes}/>
      </div>
    );
  }
}

export default App;
