import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { Reducer } from "redux"

import rootReducer from "./reducers/rootReducer"
import rootSaga from "./saga/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
}

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
) as unknown as Reducer

export const store = configureStore({
  reducer: persistedReducer,
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false
    }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch