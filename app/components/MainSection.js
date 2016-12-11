import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Container from 'muicss/lib/react/container';
import styled from 'styled-components';
import { vote } from '../actions/user';
import ArticleInfo from './ArticleInfo';
import VotingButtons from './VotingButtons';

const VotingButtonsContainer = styled.div`
  text-align: center;
  margin: 0.05em;
  padding-bottom: 1em;
`;

class MainSection extends Component {
  static propTypes = {
    vote: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Container fluid>
        <VotingButtonsContainer>
          <VotingButtons
            onClick={rating => this.props.vote(rating)}
          />
        </VotingButtonsContainer>
        <ArticleInfo />
      </Container>
    );
  }
}

export default connect(undefined, {
  vote,
})(MainSection);
