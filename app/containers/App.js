import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import style from './App.css';
import {
  setCurrentUrl,
  setBullshitPercentage,
 } from '../actions/visitingPage';


class App extends Component {

  static propTypes = {
    setCurrentUrl: PropTypes.func.isRequired,
    setBullshitPercentage: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.setBullshitPercentage(20);
    chrome.storage.local.get('currentCanonicalUrl', (data) => {
      if (data) {
        this.props.setCurrentUrl(data.currentCanonicalUrl);
      }
    });
  }

  render() {
    return (
      <div className={style.normal}>
        <Header />
        <MainSection />
      </div>
    );
  }
}

export default connect(undefined, {
  setCurrentUrl,
  setBullshitPercentage,
})(App);

