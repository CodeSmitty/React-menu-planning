import { createSelector } from "reselect";

const selectWeek = (state) => state.newWeek;

const selectMenu = (state) => state.menu;

export const selectCurrentWeek = createSelector(
  [selectWeek],
  (newWeek) => newWeek.currWeek
);

export const selectService = createSelector([selectMenu], (menu) => menu);

export const selectServiceId = createSelector(
  [selectMenu],
  (menu) => menu.service
);
