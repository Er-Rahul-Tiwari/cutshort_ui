import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Form, Input } from "reactstrap";
import Alert from "views/Notifications/Alert";
import logo from "assets/logo/logo.png";
import * as Constants from "constants/index";
import {redirect_step_third} from "actions/auth";


const Login = ({ redirect_step_third,errorList, loading, history }) => {
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
        <div className="step__progress">
          <div className="step__progress--line"></div>
          <div className="step__progress--countings">
            <div className="step__progress--circle step__progress--circle-blue">
              1
            </div>
            <div className="step__progress--circle step__progress--circle-blue">
              2
            </div>
            <div className="step__progress--circle step__progress--circle-white">
              3
            </div>
            <div className="step__progress--circle step__progress--circle-white">
              4
            </div>
          </div>
        </div>
        <div className="step__paragraph">
          <h2 className="heading-2">{Constants.LETS_SETUP}</h2>
          <p className="step__para">{Constants.CREATE_ANOTHER_WORKSPACE}</p>
        </div>
        <Form onSubmit={(e) => onSubmit(e)}>
          <div className="step__content">
            <div className="form__group">
              <label htmlFor="name" className="form__label" aria-hidden="true">
                {Constants.WORK_SPACE_NAME}
              </label>
              <Input
                className="form__input"
                type="text"
                name="name"
                autoFocus
                maxLength="50"
                minLength="5"
                aria-describedby="Steve Jobs"
                placeholder="Steve Jobs"
              />
            </div>

            <div className="form__group">
              <label
                htmlFor="display_name"
                className="form__label"
                aria-hidden="true"
              >
                <span>
                  {Constants.WORK_SPACE_URL}{" "}
                  <span className="step__optional">({Constants.OPTIONAL})</span>
                </span>
              </label>
              <div className='step__urls'>

              <Input
                className="form__input form__input--left"
                type="text"
                name="display_name"
                disabled={true}
                maxLength="50"
                minLength="5"
                aria-describedby={`${Constants.FIXED_URL}`}
                placeholder={`${Constants.FIXED_URL}`}
              />
              <Input
                className="form__input form__input--right"
                type="text"
                name="display_name"
                maxLength="50"
                minLength="5"
                aria-describedby="Steve Jobs"
                placeholder="Steve Jobs"
              />
              </div>
            </div>
            <Button className="btn" onClick={(e) => redirect_step_third(history)}>{Constants.CREATE_WORKSPACE}</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

Login.proTypes = {
  isAuthenticated: PropTypes.bool,
  errorList: PropTypes.object.isRequired,
  redirect_step_third: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorList: state.errors,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {redirect_step_third})(Login);
