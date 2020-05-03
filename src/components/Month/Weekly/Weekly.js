import React, {useState} from 'react';
import moment from 'moment';
import classes from './Weekly.module.css';
import Modal from '../../UI/Modal/Modal';
import ServiceForm from '../../ServiceForm/ServiceForm';
import Card from '../../Card/Card';

const Weekly = (props) => {
  const [modalShow, setModalShow] = useState({entre: "", show: false, id: ''})
  const [entres, setEntre] = useState([])

  const week = getCurrentWeek()

  function submitMeal(newMeal) {
    setEntre(prevMeals => {
      return [
        ...prevMeals,
        newMeal
      ];
    });

  }

  const closeModalHandler = () => {
    setModalShow({show: false})

  };

  const weekly = week.map((day, i) => {
    const dayName = moment(day).format("ddd");
    const date = day.getDate();
    const currMonth = moment(day).format('MMM')
    const handleClick = () => {
      setModalShow({show: true, id: dayName});
    }
    const dayMeals = entres.filter((meal) => {
      return meal.day === modalShow.id;
    });

    const showEntre = dayMeals.map((meal, i) => {
      return meal.entre;
    })

    let serviceForm = <ServiceForm onAdd={submitMeal} key={i} dates={modalShow.id}/>;
    return (<Card key={day}>
      <Modal show={modalShow.show} modalClosed={closeModalHandler}>{serviceForm}</Modal>
      <div className={classes.InputBox}>
        <div >
          <div className={classes.DaysContainer}>
            <p>{dayName}
              {currMonth}
              {date}</p>
          </div>
          <div onClick={handleClick} className={classes.ServiceContainer}>
            <p>Lunch</p>
            <span className={classes.Meals}>
              <p>{showEntre}
                i
              </p>
              <p>side</p>
              <p>desert</p>
            </span>
          </div>
          <div >
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
