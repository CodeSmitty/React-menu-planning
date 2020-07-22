import React, { useState } from "react";
import Day from "../Day/Day";
import moment from "moment";

const Week = (props) => {
  const [meals, addMeal] = useState([]);

  let week = getCurrentWeek();

  function submitMeal(newMeal) {
    addMeal((prevMeals) => {
      return [...prevMeals, newMeal];
    });
  }

  return (
    <div>
      <div className="container">
        {week.map((day, i) => {
          // ex: Sunday, Monday, Tuesday...
          const dayName = moment(day).format("dddd");
          const dayMeals = meals.filter((meal) => {
            return meal.day === dayName;
          });

          return (
            <Day
              key={"day" + i}
              dayName={dayName}
              dayDate={day.getDate()}
              dayMonth={moment(day).format("MMM")}
              entres={dayMeals.map((meal, index) => {
                return meal.entre;
              })}
              sides={dayMeals.map((meal, index) => {
                return meal.side;
              })}
              dinnerEntres={dayMeals.map((meal, index) => {
                return meal.dinner_entre;
              })}
              dinnerSides={dayMeals.map((meal, index) => {
                return meal.dinner_side;
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

// API
// [
//   {
//     date: 2020-04-05,
//     service_type: lunch,
//     menu_items: [
//       {
//         name: Ham,
//         type: entree
//       },
//       {
//         name: Eggs,
//         type: side
//       }
//     ]
//   },
//   {
//     date: 2020-04-07,
//     service_type: dinner,
//     menu_items: [
//       {
//         name: Steak,
//         type: entree
//       },
//       {
//         name: Potatoes,
//         type: side
//       }
//     ]
//   }
// ]
