import React, {useState} from "react";
import classes from './Day.module.css'

const Lunch = (props) => {
  const [lunch, setLunch] = useState({day: props.dayName, entre: "", side: ""});

  const [hideForm, setHideForm] = useState({hidden: false})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLunch((preLunchState) => {
      return {
        ...preLunchState,
        [name]: value
      };
    });
  };

  const submitLunch = (e) => {
    e.preventDefault();
    props.onAdd(lunch);
    hideForm.hidden = true;
    setLunch({day: props.dayName, entre: "", side: ""});
  };

  return (<div>
    <h4 >Lunch</h4>
    <div className={hideForm.hidden
        ? classes.Back
        : null}>
      <form onSubmit={submitLunch}>
        <input
          placeholder="Entre"
          name="entre" onChange={handleChange}
          value={lunch.entre}
          type="text"></input>
        <textarea
          name="side"
          onChange={handleChange}
          value={lunch.side}
          placeholder="Side" type="text"/>
        <button
          className={classes.SubButton}
          type="submit"
          onClick={submitLunch}>
          +
        </button>
      </form>
    </div>
    <p className={classes.SubmittedEntre}>{props.entres}</p>
    <p className={classes.SubmittedSide}>{props.sides}</p>
  </div>);
};

export default Lunch;
