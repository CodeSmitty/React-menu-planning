import { combineReducers } from "redux";

import menuReducer from "./reducers/menuReducer";
import newWeekReducer from "./reducers/addingNewWeeks.reducer";
import userReducer from './reducers/user.reducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  newWeek: newWeekReducer,
  user:userReducer
});

export default rootReducer;
