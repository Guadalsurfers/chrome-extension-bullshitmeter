import React from 'react';
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

const structuredSelector = (state) => {
  return {
    bullshitPercentage: state.visitingPage.currentBullshitPercentage,
  };
};

export default connect(structuredSelector)(ArticleInfo);
