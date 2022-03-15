import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { redirect_step_four } from "actions/auth";
import { Button, Form, Input } from "reactstrap";
import Alert from "views/Notifications/Alert";
import logo from "assets/logo/logo.png";
import * as Constants from "constants/index";

const Login = ({ redirect_step_four, errorList, loading, history }) => {
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
            <div className="step__progress--circle step__progress--circle-blue">
              3
            </div>
            <div className="step__progress--circle step__progress--circle-white">
              4
            </div>
          </div>
        </div>
        <div className="step__paragraph">
          <h2 className="heading-2">{Constants.PLANNING_TO_USE}</h2>
          <p className="step__para">{Constants.CHANGE_LATER}</p>
        </div>
        <Form onSubmit={(e) => onSubmit(e)}>
          <div className="step__content">
            <div className="step__cards">
              <label className="step__card">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5.07 16.28C5.5 15.38 8.12 14.5 10 14.5C11.88 14.5 14.51 15.38 14.93 16.28C13.57 17.36 11.86 18 10 18C8.14 18 6.43 17.36 5.07 16.28ZM16.36 14.83C14.93 13.09 11.46 12.5 10 12.5C8.54 12.5 5.07 13.09 3.64 14.83C2.62 13.49 2 11.82 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 11.82 17.38 13.49 16.36 14.83ZM10 4C8.06 4 6.5 5.56 6.5 7.5C6.5 9.44 8.06 11 10 11C11.94 11 13.5 9.44 13.5 7.5C13.5 5.56 11.94 4 10 4ZM10 9C9.17 9 8.5 8.33 8.5 7.5C8.5 6.67 9.17 6 10 6C10.83 6 11.5 6.67 11.5 7.5C11.5 8.33 10.83 9 10 9Z" />
                </svg>

                <p className="step__title">{Constants.FOR_MY_SELF}</p>
                <p>{Constants.WRITE_BETTER}</p>
              </label>
              <label className="step__card">
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 8.75C4.66 8.75 0 9.92 0 12.25V14H14V12.25C14 9.92 9.34 8.75 7 8.75ZM2.34 12C3.18 11.42 5.21 10.75 7 10.75C8.79 10.75 10.82 11.42 11.66 12H2.34ZM7 7C8.93 7 10.5 5.43 10.5 3.5C10.5 1.57 8.93 0 7 0C5.07 0 3.5 1.57 3.5 3.5C3.5 5.43 5.07 7 7 7ZM7 2C7.83 2 8.5 2.67 8.5 3.5C8.5 4.33 7.83 5 7 5C6.17 5 5.5 4.33 5.5 3.5C5.5 2.67 6.17 2 7 2ZM14.04 8.81C15.2 9.65 16 10.77 16 12.25V14H20V12.25C20 10.23 16.5 9.08 14.04 8.81ZM13 7C14.93 7 16.5 5.43 16.5 3.5C16.5 1.57 14.93 0 13 0C12.46 0 11.96 0.13 11.5 0.35C12.13 1.24 12.5 2.33 12.5 3.5C12.5 4.67 12.13 5.76 11.5 6.65C11.96 6.87 12.46 7 13 7Z" />
                </svg>
                <p className="step__title">{Constants.WITH_MY_TEAM}</p>
                <p>{Constants.WIKIS_DOCS}</p>
              </label>
            </div>

            <Button
              className="btn step__btn"
              onClick={(e) => redirect_step_four(history)}
            >
              {Constants.CREATE_WORKSPACE}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

Login.proTypes = {
  isAuthenticated: PropTypes.bool,
  errorList: PropTypes.object.isRequired,
  redirect_step_four: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorList: state.errors,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { redirect_step_four })(Login);
