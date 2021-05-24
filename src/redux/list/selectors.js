const getLoding = (state) => state.contacts.loading;
const getFilter = (state) => state.contacts.filter;
const getForm = (state) => state.contacts.items;

const getList = (state) =>
  state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  );

export default {
  getLoding,
  getFilter,
  getForm,
  getList,
};
