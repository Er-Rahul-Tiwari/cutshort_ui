import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert as ShowAlert } from "reactstrap";
import './index.scss';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert, idx) => (
    <ShowAlert className="alert__border" key={idx} color={`${alert.alertType}`}>
      <p className="">
        {alert.msg}
      </p>
    </ShowAlert>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
