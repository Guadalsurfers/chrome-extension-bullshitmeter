import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { interpolateHclLong } from 'd3-interpolate';

const MeterContainer = styled.div`
`;

const fancyRed = '#FF4136';
const fancyGreen = '#2ECC40';
const colorInterpolator = interpolateHclLong(fancyGreen, fancyRed);

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
  position: relative;
  text-align: center;
  font-size: 2em;
`;

const springConfig = {
  stiffness: 50,
  damping: 20,
};

const BasedOn = styled.div`text-align: center`;

const bullshitToDegrees = bullshit =>
  ((180 / 100) * bullshit) - 90;

class BullshitMeter extends Component {
  static propTypes = {
    numVotes: PropTypes.number.isRequired,
  };

  render() {
    return (<Motion
      defaultStyle={{ currentBullshit: 0 }}
      style={{ currentBullshit: spring(this.props.bullshit, springConfig) }}
    >
      {value => (<MeterContainer>
        <TextOnTop>
          {this.props.numVotes !== 0 ?
            `${value.currentBullshit.toFixed(2) * 100}% BULLSHIT` :
            'No votes yet'}
        </TextOnTop>
        {this.props.numVotes !== 0 ?
          <BasedOn>Based on {this.props.numVotes ? this.props.numVotes.toString() : 0} votes</BasedOn> :
          null
      }
        <Circle
          bgColor={colorInterpolator(value.currentBullshit)}
        >
          <MySvg width="125px" height="90px">
            <path d="m 15.5 66 a 4.5 4.5 0 0 0 9 0" fill="#ffffff" />
            <path d="m 100.5 66 a 4.5 4.5 0 0 0 9 0" fill="#ffffff" />
            <path d="m 20 66 a 42.5 42.5 0 0 1 85 0" fill="none" stroke="#ffffff" strokeWidth="9" />
            <NeedlePath
              degrees={bullshitToDegrees(value.currentBullshit * 100)}
              id="needle"
              d="m 50 60 a 13.5 17 0 1 0 27 0 l -13.5 -73 z"
              fill="#ffffff"
            />
          </MySvg>
        </Circle>
      </MeterContainer>)
      }
    </Motion>);
  }
}

BullshitMeter.propTypes = {
  bullshit: PropTypes.number,
};

export default BullshitMeter;
