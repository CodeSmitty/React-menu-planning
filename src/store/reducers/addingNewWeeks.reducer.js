import { getCurrentWeek } from "../utils/mealService.utility";
import * as actionTypes from "../actions/actionTypes";
import moment from "moment";

const INITIAL_STATE = {
  startOfWeek: moment().startOf("week"),
  endOfWeek: moment().endOf("week"),
  currWeek: getCurrentWeek(),
};

const newWeekReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_WEEK:
      return { ...state, currWeek: getCurrentWeek(action.payload) };
    default:
      return state;
  }
};

export default newWeekReducer;
