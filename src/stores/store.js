import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import createExpirationTransform from "redux-persist-transform-expire";

const expireTransform = createExpirationTransform({
  expireKey: "exp"
});

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["admin"],
  transforms: [expireTransform]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
export const persistor = persistStore(store);
