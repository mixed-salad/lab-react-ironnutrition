import React from "react";

class MealBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const meal = this.props.meal;
    return (
      <div className="media">
        <img
          src={meal.image}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ maxWidth: "10em" }}
          alt={meal.name}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{meal.name}</h5>
          <small>{meal.calories} cals</small>
        </div>
        <form className="row align-self-center">
          <input
            className="form-control col-9"
            type="number"
            value={meal.quantity || 1}
          />
          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    );
  }
}

export default MealBox;
