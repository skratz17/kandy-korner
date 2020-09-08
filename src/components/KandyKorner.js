import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { NavBar } from './nav/NavBar';
import { ApplicationViews } from './ApplicationViews';
import { Header } from './header/Header';
import './KandyKorner.css';
import { Login } from './auth/Login';
import { Register } from './auth/Register';

export const KandyKorner = props => (
  <>
    <Route exact path="/" render={props => {
      if(localStorage.getItem('kandy_customer')) {
        return (
          <>
            <Header />
            <NavBar />
            <ApplicationViews />
          </>
        );
      }
      else {
        return <Redirect to="/login" />;
      }
    }} />

    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </>
);