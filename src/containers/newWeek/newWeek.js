import React, { useState } from "react";
import moment from "moment";
import Weekly from "../../components/Month/Weekly/Weekly";
import "./newWeek.styles.scss";
//import Week from '../../components/Month/Week/Week'

import { connect } from "react-redux";
import { selectService } from "../../store/selectors/createWeeks.selectors";
import { createStructuredSelector } from "reselect";

const NewWeek = ({ serviceData }) => {
  let [count, setCount] = useState(0);

  const getCurrentWeek = (start) => {
    const startOfWeek = moment().startOf("week").add(count, "w");
    const endOfWeek = moment().endOf("week").add(count, "w");
    let week = [];
    let day = startOfWeek || start;

    while (day <= endOfWeek) {
      week.push(day.toDate());
      day = day.clone().add(1, "d");
    }

    return week;
  };

  let weeks = getCurrentWeek();

  const handleNextWeek = (value) => {
    setCount(count + 1);
  };

  const handlePreviousWeekClick = (value) => {
    setCount(count - 1);
  };

  return (
    <div className="outside-container">
      <Weekly
        previous={handlePreviousWeekClick}
        next={handleNextWeek}
        week={weeks}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  serviceData: selectService,
});

export default connect(mapStateToProps)(NewWeek);
