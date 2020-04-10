import React, { useState } from "react";

const Lunch = (props) => {
  const [lunch, setLunch] = useState({
    day: props.dayName,
    entre: "",
    side: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLunch((preLunchState) => {
      return {
        ...preLunchState,
        [name]: value,
      };
    });
  };

  const submitLunch = (e) => {
    e.preventDefault();
    props.onAdd(lunch);
    setLunch({
      day: props.dayName,
      entre: "",
      side: "",
    });
  };

  return (
    <div>
      <h4>Lunch</h4>
      <form onSubmit={submitLunch}>
        <input
          placeholder="Entre"
          name="entre"
          onChange={handleChange}
          value={lunch.entre}
          type="text"
        ></input>
        <textarea
          name="side"
          onChange={handleChange}
          value={lunch.side}
          placeholder="Side"
          type="text"
        />
        <button type="submit" onClick={submitLunch}>
          x
        </button>
      </form>
      <div>{props.entres}</div>
    </div>
  );
};

export default Lunch;
