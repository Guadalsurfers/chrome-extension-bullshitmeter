import React, { PropTypes } from 'react';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';

import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';


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
    onClickCreator: props => decision =>
      props.onClick({
        decision
      })
  })
);

const VotingButtons = ({ onClickCreator }) => (<div>
  <Container fluid>
    <Dropdown color="primary" label="Vote for this article" alignMenu="left">
      <DropdownItem>
        <VotingButton
          color="danger"
          text="Bullshit"
          onClick={onClickCreator('negative')}
        />
      </DropdownItem>
      <DropdownItem>
        <VotingButton
          color="primary"
          text="Neutral"
          onClick={onClickCreator('neutral')}
        />
      </DropdownItem>
      <DropdownItem>
        <VotingButton
          color="accent"
          text="Legit"
          onClick={onClickCreator('positive')}
        />
      </DropdownItem>
    </Dropdown>
  </Container>
</div>);

VotingButtons.propTypes = {
  onClickCreator: PropTypes.func.isRequired,
};

export default enhance(VotingButtons);
