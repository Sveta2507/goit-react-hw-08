import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import listAct from "./actions";

const initialState = {
  contacts: [],
  filter: "",
};

const newContact = (state, action) => [...state, action.payload];

const removeAnyContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const items = createReducer(initialState.contacts, {
  [listAct.addListSuccess]: newContact,
  [listAct.fetchListSuccess]: (_, action) => action.payload,
  [listAct.removeListSuccess]: removeAnyContact,
});

const filter = createReducer(initialState.filter, {
  [listAct.filterContact]: (_, action) => action.payload,
});
const loading = createReducer(false, {
  [listAct.addListRequest]: () => true,
  [listAct.addListSuccess]: () => false,
});

export default combineReducers({ items, filter, loading });
