import listAct from "../list/actions";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const addContact =
  ({ name, number }) =>
  (dispatch) => {
    dispatch(listAct.addListRequest());
    axios
      .post("/contacts", { name, number })
      .then((response) => {
        dispatch(listAct.addListSuccess(response.data));
      })
      .catch((error) => dispatch(listAct.addListError(error)));
  };

const fetchContact = () => (dispatch) => {
  dispatch(listAct.fetchListRequest());

  axios
    .get("/contacts")
    .then(({ data }) => {
      dispatch(listAct.fetchListSuccess(data));
    })
    .catch((error) => dispatch(listAct.fetchListError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(listAct.removeListRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(listAct.removeListSuccess(id));
    })
    .catch((error) => dispatch(listAct.removeListError(error)));
};

export default {
  removeContact,
  addContact,
  fetchContact,
};
