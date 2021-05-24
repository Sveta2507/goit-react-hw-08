import axios from "axios";
import actions from "./actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(actions.registerRequest());

  axios
    .post("/users/signup", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(actions.registerSuccess(response.data));
    })
    .catch(
      (error) => (
        dispatch(actions.registerError(error)),
        alert("Email is already registered")
      )
    );
};

const logIn = (credentials) => (dispatch) => {
  dispatch(actions.loginRequest());

  axios
    .post("/users/login", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(actions.loginSuccess(response.data));
    })
    .catch(
      (error) => (
        dispatch(actions.loginError(error)),
        alert("The email ain't related to any accounts!")
      )
    );
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(actions.getCurrentUserRequest());

  axios
    .get("/users/current")
    .then(({ data }) => dispatch(actions.getCurrentUserSuccess(data)))
    .catch((error) => actions.getCurrentUserError(error));
};

const logOut = () => (dispatch) => {
  dispatch(actions.logoutRequest());

  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(actions.logoutSuccess());
    })
    .catch((error) => dispatch(actions.logoutError(error)));
};

export default { register, logOut, logIn, getCurrentUser };
