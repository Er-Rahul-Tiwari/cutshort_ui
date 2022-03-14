import React, { useEffect } from "react"; 
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PublicRoute = ({
  history,
  component: Component,
  auth: { isAuthenticated, loading, token, },
  restricted,
  ...rest
}) => {

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) => {

        // CONDITION ACCORDING YOUR NEED

        // if (!isAuthenticated && !loading && !restricted) {
        //   return <Component {...props} />;
        // } else {
        //   if (token !== null) {
        //     // ROUTE WHERE DO YOU WANT TO REDIRECT
        //     return <Redirect to="/app/" />;
        //   }
          return <Component {...props} />;
        // }
      }}
    />
  );
};

PublicRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
})(PublicRoute);
