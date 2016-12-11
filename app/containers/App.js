import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import style from './App.css';

export default () => (
  <div className={style.normal}>
    <Header />
    <MainSection />
  </div>
);

