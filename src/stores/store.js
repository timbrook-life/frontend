import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["admin"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
export const persistor = persistStore(store);
