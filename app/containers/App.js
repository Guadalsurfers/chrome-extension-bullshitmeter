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
    currentBullshitPercentage: PropTypes.number.isRequired,
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
  };
};

export default connect(structuredSelector, {
  setCurrentUrl,
  setBullshitPercentage,
})(App);

