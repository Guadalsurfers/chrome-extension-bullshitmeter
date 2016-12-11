import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import style from './App.css';
import {
  setCurrentUrl,
  setBullshitPercentage,
 } from '../actions/visitingPage';

import {
  getGoogleToken
} from '../actions/user';

class App extends Component {
  static propTypes = {
    setCurrentUrl: PropTypes.func.isRequired,
    setBullshitPercentage: PropTypes.func.isRequired,
    currentBullshitPercentage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
  };

  componentDidMount() {
    chrome.storage.local.get('currentCanonicalUrl', (data) => {
      if (data) {
        console.log('canonical url in state ', data);
        this.props.setCurrentUrl(data.currentCanonicalUrl);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentBullshitPercentage &&
    nextProps.currentBullshitPercentage !== this.props.currentBullshitPercentage) {
      this.props.setBullshitPercentage(nextProps.currentBullshitPercentage);
    }
  }

  render() {
    // MARRONERADA PARA DEMO, VIEW PAGEPARSER
    if (this.props.currentPage === 'NOT_AN_ARTICLE') {
      return (<div className={style.normal}>
        <Header />
        <div>
          Not an article
        </div>
      </div>);
    }
    return (
      <div className={style.normal}>
        <Header />
        <MainSection />
      </div>
    );
  }
}

const structuredSelector = (state) => {
  return {
    currentBullshitPercentage: state.visitingPage.currentBullshitPercentage,
    currentPage: state.visitingPage.currentPage,
  };
};

export default connect(structuredSelector, {
  setCurrentUrl,
  setBullshitPercentage,
  getGoogleToken, // not used here, demo purposed
})(App);

