//contains application state
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import dataReducer from "./reducers/dataReducer";
import uiReducer from "./reducers/uiReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer, //everything stored in user
  data: dataReducer,
  UI: uiReducer
});

const store = createStore(
  reducers,
  initialState,
  //redux needed on client machine therefore senf function to bypass that && -> ?
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__  ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f //copied from react-devtools github page
  )                     //to see on console
);

export default store;
