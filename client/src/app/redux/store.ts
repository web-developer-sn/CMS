import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import { rootSaga } from "./sagas/rootSaga";

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development
});

// Run Saga Middleware
sagaMiddleware.run(rootSaga);

// Define RootState and AppDispatch types for TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Default export
export default store;
