import React from "react";

const TodaysMealsList = (props) => {
  const { meals } = props;

  // let totalCalories = 0;
  // meals.map((meal) => (totalCalories += meal.calories));

  const total = meals.reduce(
    (sum, meal) => sum + meal.calories * meal.quantity,
    0
  );
  return (
    <div className="todaysMeal-content">
      <ul>
        {meals.map((meal) => {
          return (
            <li>
              {meal.quantity} - {meal.name} = {meal.calories * meal.quantity}
              calories
            </li>
          );
        })}
      </ul>
      <p>Total calories: {total}</p>
    </div>
  );
};

export default TodaysMealsList;
