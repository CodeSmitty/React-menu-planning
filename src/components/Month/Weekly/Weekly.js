import React, { useState} from "react";
import moment from "moment";
import classes from "./Weekly.module.css";
import Modal from "../../UI/Modal/Modal";
import ServiceForm from "../../ServiceForm/ServiceForm";
import Card from "../../Card/Card";
import { addMenu } from "../../../store/actions/menuActions";
import { connect } from "react-redux";
//import axios from "../../../axios.orders";
import Button from '../../UI/Button/Button'



const Weekly = (props) => {
  const [form, setForm] = useState({});
  const [modalShow, setModalShow] = useState(0);

  
  function submitMeal(day, mealType, meal, date) {
    setForm((prev) => {
      prev[day] = prev[day] || {};
      prev[day][mealType] = meal;
      return prev;
    });

    
    setModalShow(0);
  }

  // useEffect(() => {
  //   axios
  //     .post("/meals.json", form)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [form]);

  const closeModalHandler = () => {
    setModalShow(0);
  };

  const handleClick = (value) => {
    setModalShow(value);
  };


  const weekly = props.week.map((day, i) => {
    const dayName = moment(day).format("ddd");
    const date = day.getDate();
    const currMonth = moment(day).format("MMM");
    

    return (
      <Card key={"day" + i}>
        <Modal
          show={modalShow === dayName + "Lunch"}
          modalClosed={closeModalHandler}
        >
          <ServiceForm
            onAdd={submitMeal}
            dayName={dayName}
            mealType="lunch"
            dates={dayName}
          />
        </Modal>
        <Modal
          show={modalShow === dayName + "Dinner"}
          modalClosed={closeModalHandler}
        >
          <ServiceForm
            onAdd={submitMeal}
            dayName={dayName}
            mealType="dinner"
            dates={dayName}
          />
        </Modal>
        <div className={classes.InputBox}>
          <div>
            <div className={classes.DaysContainer}>
              <p >
              {dayName} {currMonth}  {date}
              </p>
            </div>
            <div
              onClick={() => handleClick(dayName + "Lunch")}
              className={classes.LunchContainer}
            >
              <p style={{ margin: "5px" }}>Lunch</p>
              <div className={classes.Meals}>
                <p>
                  {form[dayName] &&
                    form[dayName]["lunch"] &&
                    form[dayName]["lunch"]["entre"]}
                </p>
                <p>
                  {form[dayName] &&
                    form[dayName]["lunch"] &&
                    form[dayName]["lunch"]["sideOne"]}
                </p>
                <p>
                  {form[dayName] &&
                    form[dayName]["lunch"] &&
                    form[dayName]["lunch"]["sideTwo"]}
                </p>
                <p>
                  {form[dayName] &&
                    form[dayName]["lunch"] &&
                    form[dayName]["lunch"]["other"]}
                </p>
              </div>
            </div>
            <div
              onClick={() => handleClick(dayName + "Dinner")}
              className={classes.DinnerContainer}
            >
              <p style={{ margin: "5px" }}>Dinner</p>
              <div className={classes.Meals}>
                <p>
                  {form[dayName] &&
                    form[dayName]["dinner"] &&
                    form[dayName]["dinner"]["entre"]}
                </p>
                <p>
                  {form[dayName] &&
                    form[dayName]["dinner"] &&
                    form[dayName]["dinner"]["sideOne"]}
                </p>
                <p>
                  {form[dayName] &&
                    form[dayName]["dinner"] &&
                    form[dayName]["dinner"]["sideTwo"]}
                </p>
                <p>
                  {form[dayName] &&
                    form[dayName]["dinner"] &&
                    form[dayName]["dinner"]["other"]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  });

  return (<div><div className={classes.ContainerOne}>
  
    {weekly}
  
  </div>
  <Button btnType='PreviousButton' clicked={props.previous} >&lsaquo;</Button>
  <Button btnType='Next' clicked={props.next} >&rsaquo;</Button>
  </div>);
};


const mapDispatchToProps = (dispatch) => ({
  addMenu: (item) => dispatch(addMenu(item)),
});

export default connect(null, mapDispatchToProps)(Weekly);
