import React, { useState } from "react";
import Day from "../Day/Day";
import Card from "../../Card/Card";
import moment from "moment";

function Table(props, year, months) {
  const startOfWeek = moment().startOf("week");
  const endOfWeek = moment().endOf("week");
  const [meal, setMeal] = useState([]);

  let week = [];
  let day = startOfWeek;

  while (day <= endOfWeek) {
    week.push(day.toDate());
    day = day.clone().add(1, "d");
  }

  let handleKeyDown = (event) => {
    const newValue = event.target.value;
    if (event.keyCode == 13) {
    }
  };

  function submitMeal(newMeal) {
    setMeal((prevMeal) => {
      return [...prevMeal, newMeal];
    });
  }

  return (
    <div>
      <div className="container">
        {week.map((day, i) => {
          const lunch = moment(day).format("dddd") + "_title";

          return (
            <Card>
              <Day
                key={i}
                id={i}
                titles={lunch}
                entres={meal.map((meals, index) => {
                  return meals.entre;
                })}
                onAdded={submitMeal}
                getCurrDates={day.getDate()}
                currMonths={moment(day).format("MMM")}
                dayNames={moment(day).format("dddd")}
              ></Day>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
export default Table;

//key={i}
//id={day.id}
//titles={lunch}
//getCurrDates={day.getDate()}
//val={lunchInput[lunch] || ""}
//changed={handleChange}//
