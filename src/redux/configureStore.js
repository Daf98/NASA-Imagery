import { configureStore } from '@reduxjs/toolkit';

// Actions
const CATEGORIES_FETCHED = 'NASA-Imagery/home/CATEGORIES_FECTHED';

// Action creators
export const fetchData = (payload) => ({
  type: CATEGORIES_FETCHED,
  payload,
});

const initialState = [];
// reducer
const homeReducer = (state = initialState, action) => {
  if (action.type === CATEGORIES_FETCHED) {
    return action.payload;
  }
};

const store = configureStore({
  reducer: homeReducer,
});

export default store;
