import React, { Component, PropTypes } from 'react';
import Container from 'muicss';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import style from './App.css';
import {
  setCurrentUrl,
  setBullshitPercentage,
 } from '../actions/visitingPage';

import {
  getGoogleToken,
  setUser,
} from '../actions/user';

const NotAnArticle = styled.div`
  text-align: center;
  font-size: 30px;
  padding-botton: 2em;
`;

class App extends Component {
  static propTypes = {
    setCurrentUrl: PropTypes.func.isRequired,
    currentAuthToken: PropTypes.string.isRequired,
    setBullshitPercentage: PropTypes.func.isRequired,
    currentBullshitPercentage: PropTypes.number.isRequired,
    currentPage: PropTypes.string.isRequired,
    getGoogleToken: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // THIS IS TO LOGOUT THE USER
    // this.props.setUser({
    //   authentication_token: null,
    //   email: null,
    //   first_name: null,
    //   id: null,
    //   last_name: null,
    // });

    if(!this.props.currentAuthToken) {
      this.props.getGoogleToken();
    }

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
        <NotAnArticle>
          Not an article
        </NotAnArticle>
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
    currentAuthToken: state.user.authentication_token,
    currentBullshitPercentage: state.visitingPage.currentBullshitPercentage,
    currentPage: state.visitingPage.currentPage,
  };
};

export default connect(structuredSelector, {
  setCurrentUrl,
  setBullshitPercentage,
  getGoogleToken,
  setUser,  // not used here, demo purposed
})(App);

