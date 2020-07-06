import React, { useState, useEffect } from "react";
import moment from "moment";
import classes from "./Weekly.module.css";
import Modal from "../../UI/Modal/Modal";
import ServiceForm from "../../ServiceForm/ServiceForm";
import Card from "../../Card/Card";
import { addMenu } from "../../../store/actions/menuActions";
import { connect } from "react-redux";

import Button from "../../UI/Button/Button";
import { createStructuredSelector } from "reselect";
import {
  selectService,
  selectServiceId,
} from "../../../store/selectors/createWeeks.selectors";
import WeeklyValue from "./weekly-value/weekly-value";

const Weekly = ({ weekData, addMenu, weekId, ...props }) => {
  const [modalShow, setModalShow] = useState(0);

  const { service } = weekData;

  const handleClick = (value) => {
    setModalShow(value);
  };

  const weekly = props.week.map((day, i) => {
    const dayName = moment(day).format("ddd");
    const date = day.getDate();
    const dateId = moment(day).format("DD.MM")
    const currMonth = moment(day).format("MMM");

    const serviceLunch = service.map((x, i) => {
      return x.id === dateId + "lunch" ? (
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
      return x.id === dateId + "dinner" ? (
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
        <Modal show={modalShow === date + "Lunch"}>
          <ServiceForm
            onAdd={() => setModalShow(weekData.modalShow)}
            id={dateId + "lunch"}
            dayName={dayName}
            mealType="lunch"
            dates={dayName}
          />
        </Modal>
        <Modal show={modalShow === dayName + "Dinner"}>
          <ServiceForm
            onAdd={() => setModalShow(weekData.modalShow)}
            id={dateId + "dinner"}
            dayName={dayName}
            mealType={"dinner"}
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
              onClick={() => handleClick(date + "Lunch")}
              className={classes.LunchContainer}
            >
              <p style={{ margin: "5px" }}>Lunch</p>
              <div className={classes.Meals}>{serviceLunch}</div>
            </div>
            <div
              onClick={() => handleClick(dayName + "Dinner")}
              className={classes.DinnerContainer}
            >
              <p style={{ margin: "5px" }}>Dinner</p>
              <div className={classes.Meals}>{serviceDinner}</div>
            </div>
          </div>
        </div>
      </Card>
    );
  });

  return (
    <div>
      <div className={classes.ContainerOne}>{weekly}</div>
      <Button btnType="PreviousButton" clicked={props.previous}>
        &lsaquo;
      </Button>
      <Button btnType="Next" clicked={props.next}>
        &rsaquo;
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  weekData: selectService,
  weekId: selectServiceId,
});

const mapDispatchToProps = (dispatch) => ({
  addMenu: (item) => dispatch(addMenu(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);
