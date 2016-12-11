import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Panel from 'muicss/lib/react/panel';
import BullshitMeter from './BullshitMeter';

const ArticleInfo = ({ bullshitPercentage }) => (
  <Panel>
    <BullshitMeter
      bullshit={bullshitPercentage}
    />
  </Panel>
);

ArticleInfo.propTypes = {
  bullshitPercentage: PropTypes.number.isRequired,
};

const structuredSelector = state => ({
  bullshitPercentage: state.visitingPage.currentBullshitPercentage,
});

export default connect(structuredSelector)(ArticleInfo);
