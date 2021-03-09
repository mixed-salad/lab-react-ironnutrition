import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: 0,
      image: "",
    };
  }

  handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmission = (event) => {
    event.preventDefault();
    const newMeal = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    };
    // const { name, calories, image } = this.state;
    // const newMeal = {name, calories, image};
    this.props.onAddMeal(newMeal);
  };

  render() {
    return (
      <form className="new-meal-form" onSubmit={this.handleSubmission}>
        <label htmlFor="input-name">Name</label>
        <input
          type="text"
          name="name"
          id="input-name"
          onChange={this.handleInput}
          value={this.state.name}
          placeholder="Name of the meal"
          required
        />
        <label htmlFor="input-carolies">Calories</label>
        <div>
          <input
            type="number"
            name="calories"
            id="input-carolies"
            onChange={this.handleInput}
            value={this.state.calories}
            required
          />
          <span>cals</span>
        </div>
        <label htmlFor="input-image">Image URL</label>
        <input
          type="url"
          name="image"
          id="input-image"
          onChange={this.handleInput}
          value={this.state.image}
          required
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
