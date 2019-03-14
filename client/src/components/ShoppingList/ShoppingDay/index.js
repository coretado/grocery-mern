import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../../../store/actions/itemActions";
import PropTypes from "prop-types";

const ShoppingDay = ({ name, deleteItem, id }) => (
  <>
    <div className="divider" />
    <div className="section">
      <p>{name}</p>
      <button
        onClick={() => deleteItem(id)}
        className="btn-small red-text text-darken-1 waves-light red lighten-5"
      >
        <i className="material-icons">delete_forever</i>
      </button>
    </div>
  </>
);

ShoppingDay.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const mapDispatchToProps = {
  deleteItem
};

export default connect(
  null,
  mapDispatchToProps
)(ShoppingDay);
