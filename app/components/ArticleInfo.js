import React from 'react';
import Panel from 'muicss/lib/react/panel';
import BullshitMeter from './BullshitMeter';

export default () => (
  <Panel>
    <BullshitMeter
      bullshit={20}
    />
  </Panel>
);


