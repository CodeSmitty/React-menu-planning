import React, {useState} from 'react';
import Days from './Days/Days';

function Table(props) {
  const date = new Date();
  const getDay = date.getDate();
  const month = date.getMonth();
  const currentDay = date.getDay();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const dayName = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];

  const namedMonth = months[month];
  const dynaDay = dayName[currentDay];

  const [currentDate, setCurrentDate] = useState(namedMonth);
  const [lunchInput, setLunchInput] = useState("");

  let handleDayLoop = () => {}

  let handleKeyDown = (event) => {
    const newValue = event.target.value
    if (event.keyCode == 13) {}

  }

  const lunchInputHandler = (event) => {
    const {name, value} = event.target;
    setLunchInput(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
    console.log(name)
    console.log(value)
  }

  return (<div>
    <div className="container">
      <form >
        {dayName.map((value, i) => (<Days key={i} currentDates={currentDate} lunchInput={lunchInputHandler} dayNames={dayName[i]} getDates={getDay}></Days>))}

      </form>
    </div>
  </div>)

}
export default Table;
