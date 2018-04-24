import React from "react";
import PropTypes from "prop-types";
import base, { firebaseApp } from '../base';
import firebase from 'firebase';
import AddDishForm from "./AddDishForm";
import EditDishForm from "./EditDishForm";
import Login from "./Login";

class Inventory extends React.Component {
  static propTypes = {
    dishes: PropTypes.object,
    updateDish: PropTypes.func,
    deleteDish: PropTypes.func,
    loadSampleDishes: PropTypes.func
  };

  state = {
    uid: null,
    owner: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.authHandler({ user });
      }
    })
  }

  authHandler = async authData => {
    const order = await base.fetch(this.props.ownerId, { context: this });

    if(!order.owner){
      await base.post(`${this.props.ownerId}/owner`, {
        data: authData.user.uid
      });
    }

    this.setState({
      uid: authData.user.uid,
      owner: order.owner || authData.user.uid
    });
  }

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null})
  };

  render() {
    const logout = <button className="logout-button" onClick={this.logout}>Log Out</button>;

    if(!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    if(this.state.uid !== this.state.owner) {
      console.log("does it work?")
      return (
        <div>
          <p>Sorry you are not the owner!</p>
          {logout}
        </div>
      )
    }

    return (
      <div className="inventory">
        <h2>What's in The Store <span>{logout}</span></h2>
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
