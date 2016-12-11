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
  }

  votingButtons = () => (
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
    </div>);

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
});

export default connect(structuredSelector, {
  getGoogleToken,
})(enhance(VotingButtons));
