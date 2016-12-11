import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { interpolateHclLong } from 'd3-interpolate';

const MeterContainer = styled.div`
`;

const fancyRed = '#FF4136';
const fancyGreen = '#2ECC40';
const colorInterpolator = interpolateHclLong(fancyRed, fancyGreen);

const Circle = styled.div`
  width: 158px;
  height: 158px;
  margin: 20px auto;
  text-align: center;
  background: ${props => props.bgColor};
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid #fff;
`;

const MySvg = styled.svg`
  margin:20px 0 0 0;
`;

const NeedlePath = styled.path`
  position: relative;
  transform: rotate(${props => props.degrees || 0}deg);
  transform-origin: 63px 66px;
  -webkit-transform: rotate(${props => props.degrees || 0}deg);
  -webkit-transform-origin: 63px 66px;
`;

const TextOnTop = styled.div`
  position: absolute;
  left: 20%;
  z-index: 300;
  font-size: 30px;
`;

const springConfig = {
  stiffness: 50,
  damping: 20,
};

const bullshitToDegrees = bullshit =>
  ((180 / 100) * bullshit) - 90;

const BullshitMeter = ({ bullshit }) => (
  <Motion
    defaultStyle={{ currentBullshit: 0 }}
    style={{ currentBullshit: spring(bullshit, springConfig) }}
  >
    {value => (<MeterContainer>
      <TextOnTop>{value.currentBullshit.toFixed(2)}%</TextOnTop>
      <Circle
        bgColor={colorInterpolator(value.currentBullshit / 100)}
      >
        <MySvg width="125px" height="90px">
          <path d="m 15.5 66 a 4.5 4.5 0 0 0 9 0" fill="#ffffff" />
          <path d="m 100.5 66 a 4.5 4.5 0 0 0 9 0" fill="#ffffff" />
          <path d="m 20 66 a 42.5 42.5 0 0 1 85 0" fill="none" stroke="#ffffff" strokeWidth="9" />
          <NeedlePath
            degrees={bullshitToDegrees(value.currentBullshit)}
            id="needle"
            d="m 50 60 a 13.5 17 0 1 0 27 0 l -13.5 -73 z"
            fill="#ffffff"
          />
        </MySvg>
      </Circle>
    </MeterContainer>)
    }
  </Motion>
);

BullshitMeter.propTypes = {
  bullshit: PropTypes.number,
};

export default BullshitMeter;
