import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Panel from 'muicss/lib/react/panel';
import BullshitMeter from './BullshitMeter';

const ArticleInfo = ({ bullshitPercentage, numVotes }) => (
  <Panel>
    <BullshitMeter
      bullshit={bullshitPercentage}
      numVotes={numVotes}
    />
  </Panel>
);

ArticleInfo.propTypes = {
  bullshitPercentage: PropTypes.number.isRequired,
  numVotes: PropTypes.number.isRequired,
};

const structuredSelector = state => ({
  bullshitPercentage: state.visitingPage.currentBullshitPercentage,
  numVotes: state.visitingPage.numVotes,
});

export default connect(structuredSelector)(ArticleInfo);
