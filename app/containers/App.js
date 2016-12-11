import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import style from './App.css';
import { setCurrentUrl } from '../actions/visitingPage';


class App extends Component {

  static propTypes = {
    setCurrentUrl: PropTypes.func.isRequired,
  };

  componentDidMount() {
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
})(App);

