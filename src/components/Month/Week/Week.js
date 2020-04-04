import React, {useState} from 'react';
import Day from '../Day/Day';
import Moment from 'react-moment';
import moment from 'moment';

function Table(props, year, months) {
  const startOfWeek = moment().startOf("week");
  const endOfWeek = moment().endOf("week");
  const [lunchInput, setLunchInput] = useState({
    title:"",
    content:""
  })

  

  let week = [];
  let day = startOfWeek;

  while (day <= endOfWeek) {
    week.push(day.toDate());
    day = day.clone().add(1, "d");
  };



  let handleDayLoop = (props) => {}

  let handleKeyDown = (event) => {
    const newValue = event.target.value
    if (event.keyCode == 13) {}

  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setLunchInput(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });

  }

console.log(lunchInput.title)

  return (<div>
    <div className="container">
      <form >
        {week.map((day, i) => (<Day
          key={i}
          id={i}
          titles={'title'}
          getCurrDates={day.getDate()}
          val={lunchInput.title}
          changed={handleChange}
          currMonths={moment(day).format('MMM')}
          dayNames={moment(day).format("dddd")}></Day>))}

      </form>
    </div>
  </div>)

}
export default Table;
