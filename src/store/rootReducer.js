import { combineReducers } from "redux";

import menuReducer from "./reducers/menuReducer";
import newWeekReducer from "./reducers/addingNewWeeks.reducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  newWeek: newWeekReducer,
});

export default rootReducer;
