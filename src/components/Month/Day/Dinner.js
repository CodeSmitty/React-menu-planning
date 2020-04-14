import React, {useState} from "react";
import classes from './Day.module.css';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

const Dinner = (props) => {
  const [dinner, setDinner] = useState({
    day:props.dayName,
    dinner_entre:"",
    dinner_side:""
  })

  const [hideForm, setHideForm] = useState({hidden: false})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDinner((preLunchState) => {
      return {
        ...preLunchState,
        [name]: value,
      };
    });
  };

  const submitDinner = (e) => {
    e.preventDefault();
    props.onAdd(dinner);
    hideForm.hidden = true;
    setDinner({
      day: props.dayName,
      dinner_entre: "",
      dinner_side: "",
    });
  };

  return (
    <div>
      <h4>Dinner</h4>
    <div className={hideForm.hidden
        ? classes.Back
        : null}>
      <form onSubmit={submitDinner}>
      <input
        onChange={handleChange}
        name="dinner_entre"
        value={dinner.dinner_entre}
        placeholder="Entre" type="text" />
      <textarea
        onChange={handleChange}
        name="dinner_side"
        value={dinner.dinner_side}
        placeholder="Side" type="text" />
        <button
          className={classes.SubButton}
          type="submit"
          onClick={submitDinner}>
          <AddCircleRoundedIcon />
        </button>
      </form>
    </div>
      <p className={classes.SubmittedEntre}>{props.dinnerEntres}</p>
      <p className={classes.SubmittedSide}>{props.dinnerSides}</p>

    </div>
  );
};

export default Dinner;
