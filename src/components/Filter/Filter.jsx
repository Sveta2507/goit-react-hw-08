import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import action from "../../redux/list/actions";
import selector from "../../redux/list/selectors";
import classes from "./Filter.module.scss";

const Filter = ({ render, filter }) => (
  <div className="filter-cont">
    <label className={classes.label}>Filter contacts if necessary</label>
    <input
      type="text"
      value={filter}
      onChange={(e) => render(e.target.value)}
    />
  </div>
);

Filter.propTypes = {
  render: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

const mapStateToProps = (state) => ({
  filter: selector.getFilter(state),
});
const mapDispatchToProps = {
  render: action.filterContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
