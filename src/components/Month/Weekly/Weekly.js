import React, {useState} from 'react';
import moment from 'moment';
import classes from './Weekly.module.css';
import Modal from '../../UI/Modal/Modal';
import ServiceForm from '../../ServiceForm/ServiceForm';
import Card from '../../Card/Card';

const Weekly = (props) => {
const [form, setForm] = useState({
  id:'',
  meal:[]
})
const [modalShow, setModalShow] = useState(false)

  const week = getCurrentWeek()

  function submitMeal(newMeal, dayName) {

    setForm(prev =>{
      return{
        ...prev,
        prev.id:dayName,
        meal:newMeal
      }
    })
  }

  const closeModalHandler = () => {
    setModalShow(false)

  };

  const weekly = week.map((day, i) => {
    const dayName = moment(day).format("ddd");
    const date = day.getDate();
    const currMonth = moment(day).format('MMM')
    const handleClick = () => {
      setModalShow(true)

    }
    // const dayMeals = form.filter((meal) => {
    //   return meal.day === form.id;
    // });

    // const showEntre = dayMeals.map((meal, i) => {
    //   return meal.entre;
    // })

  //  let serviceForm = <ServiceForm onAdd={submitMeal} key={i} dates={modalShow.id}/>;
    return (<Card key={"day" + i}>
      <Modal show={modalShow} modalClosed={closeModalHandler}>
        <ServiceForm onAdd={(e)=>submitMeal(e, dayName)} days={form.id}  dates={dayName}/>
      </Modal>
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
              <p>
                {form.value}
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
