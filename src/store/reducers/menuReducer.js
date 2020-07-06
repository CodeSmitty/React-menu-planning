import * as actionTypes from "../actions/actionTypes";

import { updateObject } from "../utils/calendarDates";

const initialState = {
  service: [],
  modalShow: null,
};

const submitFormSuccess = (state, action) => {
  // const newOrder = updateObject( action.orderData, { id: action.newOrder } );
  const updateService = updateObject(action.service);
  return updateObject(state, {
    modalShow: 0,
    service: state.service.concat(updateService),
  });
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MENU:
      return submitFormSuccess(state, action);

    default:
      return state;
  }
};

export default menuReducer;
