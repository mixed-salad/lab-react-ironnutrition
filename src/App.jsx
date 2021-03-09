import React, { Component } from "react";
import "./App.scss";

import meals from "./meals";
import MealBox from "./components/MealBox";
import Search from "./components/Search";
import Form from "./components/Form";

class App extends Component {
  state = {
    meals: meals,
    isFormVisible: false,
    searchQuery: "",
  };

  addNewMealForm = () => {
    this.setState({
      isFormVisible: true,
    });
  };

  addMeal = (newMeal) => {
    this.setState({
      meals: [newMeal, ...this.state.meals],
      isFormVisible: false,
    });
  };

  handleQueryChange = (query) => {
    this.setState({
      searchQuery: query,
    });
  };
  render() {
    const filteredMeals = this.state.meals.filter((meal) => {
      if (!this.state.searchQuery) {
        return true;
      } else {
        return meal.name
          .toLowerCase()
          .startsWith(this.state.searchQuery.toLowerCase());
      }
    });

    return (
      <div>
        <h1>IronNutrition</h1>
        <Search
          query={this.state.searchQuery}
          onQueryChange={this.handleQueryChange}
        />

        {(this.state.isFormVisible && <Form onAddMeal={this.addMeal} />) || (
          <button onClick={this.addNewMealForm}>Add new meal</button>
        )}
        {filteredMeals.map((meal) => (
          <MealBox key={meal.name} meal={meal} />
        ))}
      </div>
    );
  }
}

export default App;
