// rootReducer.ts

import { combineReducers } from "@reduxjs/toolkit";
import storesSlice from "./slices/storesSlice";
const rootReducer = combineReducers({
  stores: storesSlice,
  // Add more slices here if you have multiple slices in your app
});

export default rootReducer;
