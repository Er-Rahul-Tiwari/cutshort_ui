import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {redirect_step_first} from "actions/auth";
import { Button, Form, Input } from "reactstrap";
import Alert from "views/Notifications/Alert";
import logo from "assets/logo/logo.png";
import complete from "assets/login/complete.png";
import * as Constants from "constants/index";

const Login = ({ redirect_step_first,errorList, loading, history }) => {
  
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="step">
      <div className="step__container">
        <div className="step__logo">
          <img className="step__img" src={logo} />
          <h3 className="heading-3">{Constants.LOGO_NAME}</h3>
        </div>
        <div className='step__progress'>
        <div className='step__progress--line step__progress--line__blue'>
        </div>
        <div className='step__progress--countings'>
          <div className='step__progress--circle step__progress--circle-blue'>1</div>
          <div className='step__progress--circle step__progress--circle-blue'>2</div>
          <div className='step__progress--circle step__progress--circle-blue'>3</div>
          <div className='step__progress--circle step__progress--circle-blue'>4</div>
        </div>
        </div>

        <div className='step__completes'>

<img className="step__complete" src={complete} alt='completed'/>
</div>
        <div className="step__paragraph">
          <h2 className="heading-2">{Constants.CONGRATULATIONS_EDEN}</h2>
          <p className="step__para">{Constants.COMPLETED_ONBOARDING}</p>
        </div>
        <Form onSubmit={(e) => onSubmit(e)}>
          <div className='step__content'>
        <Button className="btn" onClick={(e) => redirect_step_first(history)}>{Constants.LAUNCH_EDEN}</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

Login.proTypes = {
  isAuthenticated: PropTypes.bool,
  errorList: PropTypes.object.isRequired,
  redirect_step_first: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorList: state.errors,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {redirect_step_first})(Login);
