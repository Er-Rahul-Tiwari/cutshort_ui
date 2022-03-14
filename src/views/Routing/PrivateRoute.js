import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, token },
  ...rest
}) => {

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated && token === null) {
          return <Redirect to="/app/login" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
