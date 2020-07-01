import './App.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';

import React, { Component } from 'react';

class App extends Component {
  state = {
    showTheFoods: foods,
    showForm: true,
  };

  showFoods = () => {
    return this.state.showTheFoods.map((eachFood) => {
      return (
        <FoodBox
          name={eachFood.name}
          image={eachFood.image}
          calories={eachFood.calories}
        />
      );
    });
  };

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    };
    let copyOfFoods = [...this.state.showTheFoods];

    copyOfFoods.unshift(newFood);
    this.setState({
      showForm: false,
      showTheFoods: copyOfFoods,
    });
  };

  handleChange = (e) => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        <input onChange={this.handleChange} type="text" placeholder="search" />
        {this.showFoods()}
        <button onClick={this.toggleForm}>Toggle Form</button>
        {this.state.showForm ? (
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              placeholder="name"
              name="name"
              type="text"
            />
            <input
              onChange={this.handleChange}
              placeholder="name"
              name="name"
              type="text"
            />
            <input
              onChange={this.handleChange}
              placeholder="name"
              name="name"
              type="text"
            />
            <input type="submit" />
          </form>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default App;
