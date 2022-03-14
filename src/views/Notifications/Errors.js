import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Error = ({ errorList, current_key }) => {
  if (current_key in errorList) {
    return (
      <p className="font-10 text-upper alert-danger">
        {errorList[current_key]}
      </p>
    );
  }
  return "";
};

Error.propTypes = {
  errorList: PropTypes.object.isRequired,
  current_key: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  errorList: state.errors,
});

export default connect(mapStateToProps)(Error);
