import React from 'react';
import { NavBar } from './nav/NavBar';
import { ApplicationViews } from './ApplicationViews';
import { Header } from './header/Header';

export const KandyKorner = props => {
  return (
    <>
      <Header />
      <NavBar />
      <ApplicationViews />
    </>
  );
};