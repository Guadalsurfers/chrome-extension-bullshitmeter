import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';

import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

import { getGoogleToken } from '../actions/user';

import {
  compose,
  withHandlers,
} from 'recompose';



const VotingButton = ({ color, text, onClick }) => (<div>
  <Button
    color={color}
    onClick={onClick}
  >
    {text}
  </Button>
</div>);

VotingButton.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const enhance = compose(
  withHandlers({
    onClickCreator: props => decision => () =>
      props.onClick(decision)
  })
);

class VotingButtons extends Component {
  static propTypes = {
    userId: PropTypes.string,
    authToken: PropTypes.string,
    getGoogleToken: PropTypes.func.isRequired,
    currentRating: PropTypes.number.isRequired,
  }

  ratingToButton = () => {
    const colorMap = {
      0: 'accent',
      0.5: 'primary',
      1: 'danger',
    };
    const labelMap = {
      0: 'Legit',
      0.5: 'Neutral',
      1: 'Bullshit',
    };

    return (<Button
      disabled
      color={colorMap[this.props.currentRating] || 'primary'}
    >
      {labelMap[this.props.currentRating] || 'No vote'}
    </Button>);
  };

  votingButtons = () => (!this.props.currentRating ? (
    <div>
      <Container fluid>
        <Dropdown color="primary" label="Rate this article" alignMenu="left">
          <DropdownItem>
            <VotingButton
              color="danger"
              text="Bullshit"
              onClick={this.props.onClickCreator(1)}
            />
          </DropdownItem>
          <DropdownItem>
            <VotingButton
              color="primary"
              text="Neutral"
              onClick={this.props.onClickCreator(0.5)}
            />
          </DropdownItem>
          <DropdownItem>
            <VotingButton
              color="accent"
              text="Legit"
              onClick={this.props.onClickCreator(0)}
            />
          </DropdownItem>
        </Dropdown>
      </Container>
    </div>) : (<div>
      {this.ratingToButton()}
    </div>
  ));

  loginButton = () => (
    <div>
      <Container fluid>
        <Button
          color="primary"
          onClick={() => this.props.getGoogleToken()}
        >
          Login to change the world
        </Button>
      </Container>
    </div>
  );

  render() {
    const { userId, authToken } = this.props;
    return (userId && authToken) ?
      this.votingButtons() :
      this.loginButton();
  }
}

VotingButtons.propTypes = {
  onClickCreator: PropTypes.func.isRequired,
};

const structuredSelector = state => ({
  userId: state.user.id,
  authToken: state.user.authentication_token,
  currentRating: state.visitingPage.currentRating,
});

export default connect(structuredSelector, {
  getGoogleToken,
})(enhance(VotingButtons));
