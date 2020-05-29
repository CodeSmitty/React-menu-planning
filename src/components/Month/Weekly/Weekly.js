import React, { useState, useReducer, useEffect } from 'react';
import moment from 'moment';
import classes from './Weekly.module.css';
import Modal from '../../UI/Modal/Modal';
import ServiceForm from '../../ServiceForm/ServiceForm';
import Card from '../../Card/Card';
import dispatchReducer from '../../../store/reducers/menuReducer';
import axios from '../../../axios.orders';


const Weekly = (props) => {
  const [form, setForm] = useState({})
  const [modalShow, setModalShow] = useState(0)
  const { menuReducer, initialState } = dispatchReducer();
  const [state, dispatch] = useReducer(menuReducer, initialState);
  const dates = moment().format("MMM Do YY");

  const week = getCurrentWeek()

  function submitMeal(day, mealType, meal) {
    setForm(prev => {
      prev[day] = prev[day] || {}
      prev[day][mealType] = meal;
      return prev;
    });


    dispatch({
      type: 'MEAL_SERVICE',
      date: dates,
      service_type: mealType,
      service_id: day,
      meal: meal,
      meal_items: [
        {
          meal_item_id: 'entres',
          entre: [meal.entre]
        },
        {
          meal_item_id: 'sides',
          side: [meal.sideOne, meal.sideTwo]
        },
        {
          meal_item_id: 'deserts',
          other: [meal.other]
        }
      ]
    })
    setModalShow(0)
  }



  useEffect(() => {
    axios.post('/meals.json', state)
      .then(res => {

      })
      .catch(error => {
        console.log(error)
      });
  })


  const closeModalHandler = () => {
    setModalShow(0)
  };

  const handleClick = (value) => {
    setModalShow(value)
  }

  const weekly = week.map((day, i) => {
    const dayName = moment(day).format("ddd");
    const date = day.getDate();
    const currMonth = moment(day).format('MMM')



    return (<Card key={"day" + i}>
      <Modal show={modalShow === dayName + "Lunch"} modalClosed={closeModalHandler}>
        <ServiceForm onAdd={submitMeal} dayName={dayName} mealType="lunch" dates={dayName} />
      </Modal>
      <Modal show={modalShow === dayName + "Dinner"} modalClosed={closeModalHandler}>
        <ServiceForm onAdd={submitMeal} dayName={dayName} mealType="dinner" dates={dayName} />
      </Modal>
      <div className={classes.InputBox}>
        <div >
          <div className={classes.DaysContainer}>
            <p>{dayName}
              {currMonth}
              {date}</p>
          </div>
          <div onClick={() => handleClick(dayName + "Lunch")} className={classes.LunchContainer}>
            <p style={{ margin: '5px' }}>Lunch</p>
            <div className={classes.Meals}>
              <p>{form[dayName] && form[dayName]["lunch"] && form[dayName]["lunch"]["entre"]}</p>
              <p>{form[dayName] && form[dayName]["lunch"] && form[dayName]["lunch"]["sideOne"]}</p>
              <p>{form[dayName] && form[dayName]["lunch"] && form[dayName]["lunch"]["sideTwo"]}</p>
              <p>{form[dayName] && form[dayName]["lunch"] && form[dayName]["lunch"]["other"]}</p>
            </div>
          </div>
          <div onClick={() => handleClick(dayName + "Dinner")} className={classes.DinnerContainer}>
            <p style={{ margin: '5px' }}>Dinner</p>
            <div className={classes.Meals}>
              <p>{form[dayName] && form[dayName]["dinner"] && form[dayName]["dinner"]["entre"]}</p>
              <p>{form[dayName] && form[dayName]["dinner"] && form[dayName]["dinner"]["sideOne"]}</p>
              <p>{form[dayName] && form[dayName]["dinner"] && form[dayName]["dinner"]["sideTwo"]}</p>
              <p>{form[dayName] && form[dayName]["dinner"] && form[dayName]["dinner"]["other"]}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>)
  });

  return (<div className={classes.ContainerOne}>
    {weekly}
  </div>)
}

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

export default Weekly;
