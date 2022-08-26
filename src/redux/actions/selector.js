import { createSelector } from "reselect";

const counterSelector = (state) => state.count;

export const getCount = createSelector([counterSelector], (state) => state.count);