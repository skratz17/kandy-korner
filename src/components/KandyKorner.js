import React from 'react';
import { NavBar } from './nav/NavBar';
import { ApplicationViews } from './ApplicationViews';
import { Header } from './header/Header';
import './KandyKorner.css';

export const KandyKorner = props => {
  return (
    <>
      <Header />
      <NavBar />
      <ApplicationViews />
    </>
  );
};