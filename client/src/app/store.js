import { configureStore } from "@reduxjs/toolkit";
// import trafficSliceReducer, { trafficSliceName } from "./TrafficLight";
// import mockSliceReducer, { mockSliceName } from "./Mock";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    // [trafficSliceName]: trafficSliceReducer,
    // [mockSliceName]: mockSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
