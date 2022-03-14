import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch,withRouter } from "react-router-dom";
import UserComponentRoutes from "views/Routing/ComponentRoutes";

import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Index = ({ alerts, ...props }) => {

  const createNotification = (type, message) => {
    switch (type) {
      case "info":
        return NotificationManager.info(message, "", 500);
      case "success":
        return NotificationManager.success(message, "", 500);
      case "warning":
        return NotificationManager.warning(message, "", 500);
      case "danger":
        return NotificationManager.error(message, "", 500);
      default:
        break;
    }
  };

  useEffect(() => {
    alerts !== null &&
      alerts.length > 0 &&
      alerts.map((alert, idx) => {
        createNotification(`${alert.alertType}`, alert.msg);
        return true;
      });
  }, [alerts]);
  
  return (
    <>
        <NotificationContainer />
        <Switch>
          {UserComponentRoutes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                component={route.component}
              />
            ) : null;
          })}
        </Switch>
    </>
  );
};

Index.prototype = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(withRouter(Index));
