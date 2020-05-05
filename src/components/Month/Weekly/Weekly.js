import React, {useState} from 'react';
import moment from 'moment';
import classes from './Weekly.module.css';
import Modal from '../../UI/Modal/Modal';
import ServiceForm from '../../ServiceForm/ServiceForm';
import Card from '../../Card/Card';

const Weekly = (props) => {
  const [form, setForm] = useState([])
  const [modalShow, setModalShow] = useState(0)

  const week = getCurrentWeek()

  function submitMeal(newMeal, value) {
    setForm(prev => {
      return [
        ...prev,
        newMeal
      ]
    });
    setModalShow(0)
  }

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

    const formData = form.filter((meal) => {
      return meal.id === dayName
    });
    const mealEntre = formData.map((meal) => {
      return meal.orders.entre;
    })

    const mealSideOne = formData.map((meal) => {
      return meal.orders.sideOne;
    })

    const mealSideTwo = formData.map((meal) => {
      return meal.orders.sideTwo;
    })

    const mealOther = formData.map((meal) => {
      return meal.orders.other;
    })

    return (<Card key={"day" + i}>
      <Modal show={modalShow === dayName} modalClosed={closeModalHandler}>
        <ServiceForm onAdd={submitMeal} dayName={dayName} dates={dayName}/>
      </Modal>
      <div className={classes.InputBox}>
        <div >
          <div className={classes.DaysContainer}>
            <p>{dayName}
              {currMonth}
              {date}</p>
          </div>
          <div onClick={() => handleClick(dayName)} className={classes.LunchContainer}>
            <p style={{margin:'5px'}}>Lunch</p>
            <div className={classes.Meals}>
              <p>{mealEntre}</p>
              <p>{mealSideOne}</p>
              <p>{mealSideTwo}</p>
              <p>{mealOther}</p>
            </div>
          </div>
          <div className={classes.DinnerContainer} >
            <p>Dinner</p>
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
