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
      props.onClick({
        decision,
      })
  })
);

class VotingButtons extends Component {

  static propTypes = {
    userId: PropTypes.string,
    userToken: PropTypes.string,
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
              onClick={this.props.onClickCreator('negative')}
            />
          </DropdownItem>
          <DropdownItem>
            <VotingButton
              color="primary"
              text="Neutral"
              onClick={this.props.onClickCreator('neutral')}
            />
          </DropdownItem>
          <DropdownItem>
            <VotingButton
              color="accent"
              text="Legit"
              onClick={this.props.onClickCreator('positive')}
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
    const { userId, userToken } = this.props;
    return (userId && userToken) ?
      this.votingButtons() :
      this.loginButton();
  }
}

VotingButtons.propTypes = {
  onClickCreator: PropTypes.func.isRequired,
};

const structuredSelector = (state) => ({
  userId: state.user.userId,
  userToken: state.user.userToken,
});

export default connect(structuredSelector, {
  getGoogleToken,
})(enhance(VotingButtons));
