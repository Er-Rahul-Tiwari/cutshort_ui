import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {redirect_step_second} from "actions/auth";
import { Button, Form, Input } from "reactstrap";
import "./index.scss";
import Alert from "views/Notifications/Alert";
import logo from "assets/logo/logo.png";
import * as Constants from "constants/index";

const Login = ({ errorList,redirect_step_second, loading, history }) => {
  
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
        <div className='step__progress--line'>
        </div>
        <div className='step__progress--countings'>
          <div className='step__progress--circle step__progress--circle-blue'>1</div>
          <div className='step__progress--circle step__progress--circle-white'>2</div>
          <div className='step__progress--circle step__progress--circle-white'>3</div>
          <div className='step__progress--circle step__progress--circle-white'>4</div>
        </div>
        </div>
        <div className="step__paragraph">
          <h2 className="heading-2">{Constants.WELCOME_FIRST}</h2>
          <p className="step__para">{Constants.CHANGE_LATER}</p>
        </div>
        <Form onSubmit={(e) => onSubmit(e)}>
          <div className='step__content'>
            
          <div className="form__group">
            <label htmlFor="name" className="form__label" aria-hidden="true">
              {Constants.YOUR_NAME}
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
              // value={name}
              // onChange={(e) => onChange(e)}
              // invalid={errorList.name ? true : false}
              // required
            />
            {/* VALIDATION FIELDs here */}
          </div>
        
          <div className="form__group">
            <label htmlFor="display_name" className="form__label" aria-hidden="true">
              {Constants.DISPLAY_NAME}
            </label>
            <Input
              className="form__input"
              type="text"
              name="display_name"
              autoFocus
              maxLength="50"
              minLength="5"
              aria-describedby="Steve Jobs"
              placeholder="Steve Jobs"
            />
            {/* VALIDATION FIELDs here */}
          </div>
          <Button className="btn" 
              onClick={(e) => redirect_step_second(history)}>{Constants.CREATE_WORKSPACE}</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

Login.proTypes = {
  isAuthenticated: PropTypes.bool,
  errorList: PropTypes.object.isRequired,
  redirect_step_second: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorList: state.errors,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {redirect_step_second})(Login);
