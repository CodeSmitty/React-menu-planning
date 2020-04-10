import React, { useState } from "react";
import Day from "../Day/Day";
import moment from "moment";

const Week = props => {
  const [meals, addMeal] = useState([]);

  let week = getCurrentWeek();

  function submitMeal(newMeal) {
    addMeal(prevMeals => {
      return [...prevMeals, newMeal];
    });
  }

  console.log(meals);
  return (
    <div>
      <div className="container">
        {week.map((day, i) => {
          // ex: Sunday, Monday, Tuesday...
          const dayName = moment(day).format("dddd");
          const dayMeals = meals.filter((meal) => {
            return meal.day === dayName;
          })

          return (
            <Day
              key={"day" + i}
              dayName={dayName}
              dayDate={day.getDate()}
              dayMonth={moment(day).format("MMM")}
              entres={dayMeals.map((meal, index) => {
                return meal.entre;
              })}
              onSubmit={submitMeal}
            />
          );
        })}
      </div>
    </div>
  );
};

function getCurrentWeek() {
  const startOfWeek = moment().startOf("week");
  const endOfWeek = moment().endOf("week");

  let week = [];
  let day = startOfWeek;

  while (day <= endOfWeek) {
    week.push(day.toDate());
    day = day.clone().add(1, "d");
  }

  return week;
}

export default Week;
