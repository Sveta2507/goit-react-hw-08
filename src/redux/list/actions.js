import { createAction } from "@reduxjs/toolkit";

const addListRequest = createAction("contacts/addRequest");
const addListSuccess = createAction("contacts/addSuccess");
const addListError = createAction("contacts/addError");

const fetchListRequest = createAction("contacts/fetchRequest");
const fetchListSuccess = createAction("contacts/fetchSuccess");
const fetchListError = createAction("contacts/fetchError");

const removeListRequest = createAction("contacts/removeRequest");
const removeListSuccess = createAction("contacts/removeSuccess");
const removeListError = createAction("contacts/removeError");

const filterContact = createAction("FILTER_CONTACTS");

export default {
  addListRequest,
  addListSuccess,
  addListError,
  fetchListRequest,
  fetchListSuccess,
  fetchListError,
  removeListRequest,
  removeListSuccess,
  removeListError,
  filterContact,
};
