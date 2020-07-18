import React, { useState, useEffect } from "react";
import moment from "moment";
import classes from "./Weekly.module.css";
import Modal from "../../UI/Modal/Modal";
import ServiceForm from "../../ServiceForm/ServiceForm";
import Card from "../../Card/Card";
import { addMenu } from "../../../store/actions/menuActions";
import { connect } from "react-redux";
import axios from "../../../axios.orders";

import Button from "../../UI/Button/Button";
import { createStructuredSelector } from "reselect";
import {
  selectService,
  selectServiceId,
} from "../../../store/selectors/createWeeks.selectors";
import WeeklyValue from "./weekly-value/weekly-value";

const Weekly = ({ weekData, service, orderData, ...props }) => {
  const [modalShow, setModalShow] = useState(0);

  const closeModalHandler = () => {
    setModalShow(0);
  };

  const handleClick = (value) => {
    setModalShow(value);
  };

  // useEffect(() => {
  //   axios
  //     .post("/meals.json", service)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [service]);

  const weekly = props.week.map((day, i) => {
    const dayName = moment(day).format("ddd");
    const date = day.getDate();
    const dateId = moment(day).format("DD.MM");
    const currMonth = moment(day).format("MMM");
    const currWeek = moment(day).week();

    const serviceLunch = service.map((x, i) => {
      return x.id === dateId + " lunch" ? (
        <WeeklyValue
          key={i}
          entre={x.orderData.entre}
          sideone={x.orderData.sideOne}
          sidetwo={x.orderData.sideTwo}
          other={x.orderData.other}
        />
      ) : null;
    });

    const serviceDinner = service.map((x, i) => {
      return x.id === dateId + " dinner" ? (
        <WeeklyValue
          key={i}
          entre={x.orderData.entre}
          sideone={x.orderData.sideOne}
          sidetwo={x.orderData.sideTwo}
          other={x.orderData.other}
        />
      ) : null;
    });

    return (
      <Card key={"day" + i}>
        <Modal
          show={modalShow === date + " lunch"}
          modalClosed={closeModalHandler}
        >
          <ServiceForm
            key={dateId + " lunch"}
            onAdd={() => {
              setModalShow(weekData.modalShow);
            }}
            id={dateId + " lunch"}
            weekId={dateId + currWeek + " lunch"}
            dayName={dayName}
            mealType="lunch"
            dates={dayName}
          />
        </Modal>
        <Modal
          show={modalShow === date + " dinner"}
          modalClosed={closeModalHandler}
        >
          <ServiceForm
            key={day}
            onAdd={() => setModalShow(weekData.modalShow)}
            id={dateId + " dinner"}
            weekId={currWeek}
            dayName={dayName}
            mealType="dinner"
            dates={dayName}
          />
        </Modal>
        <div className={classes.InputBox}>
          <div>
            <div className={classes.DaysContainer}>
              <p>
                {dayName} {currMonth} {date}
              </p>
            </div>
            <div
              onClick={() => handleClick(date + " lunch")}
              className={classes.LunchContainer}
            >
              <p style={{ margin: "5px" }} className={classes.ServiceTitles}>
                Lunch
              </p>
              <div className={classes.Meals}>{serviceLunch}</div>
            </div>
            <div
              onClick={() => handleClick(date + " dinner")}
              className={classes.DinnerContainer}
            >
              <p style={{ margin: "5px" }} className={classes.ServiceTitles}>
                Dinner
              </p>
              <div className={classes.Meals}>{serviceDinner}</div>
            </div>
          </div>
        </div>
      </Card>
    );
  });

  return (
    <div className={classes.MasterContainer}>
      <Button btnType="PreviousButton" clicked={props.previous}>
        &lsaquo;
      </Button>
      <div className={classes.ContainerOne}>
        {weekly}
        <Button btnType="Next" clicked={props.next}>
          &rsaquo;
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  weekData: selectService,
  service: selectServiceId,
});

const mapDispatchToProps = (dispatch) => ({
  addMenu: (item) => dispatch(addMenu(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);
