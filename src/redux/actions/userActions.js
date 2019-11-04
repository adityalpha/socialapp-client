import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types";
import axios from "axios";

export const loginUser = (userData, history) => dispatch => {
  dispatch({ type: LOADING_UI }); //dispatch a type and catch it from reducer
  axios
    .post("/login", userData)
    .then(res => {
      const FBIdToken = `Bearer ${res.data.token}`;
      localStorage.setItem("FBIdToken", FBIdToken);
      //each time we send a req through axios it's gonna have an auth header even on unprotected routes
      axios.defaults.headers.common["Authorization"] = FBIdToken; //check axios git
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS }); //incase errors in form
      history.push("/"); //redirect
    })
    .catch(err => {
      dispatch({
        //dispatching globally
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

//new userAction that takes token from res.data.token
export const getUserData = () => dispatch => {
  axios
    .get("/user") //will get user data
    .then(res => {
      dispatch({
        //dispatching action
        type: SET_USER,
        payload: res.data //sending data to reducer
      });
    })
    .catch(err => console.log(err));
};
