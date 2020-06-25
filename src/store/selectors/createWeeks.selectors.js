import { createSelector } from 'reselect';


const selectWeek = state => state.newWeek;


export const selectCurrentWeek = createSelector(
    [selectWeek],
    (newWeek) => newWeek.currWeek
);