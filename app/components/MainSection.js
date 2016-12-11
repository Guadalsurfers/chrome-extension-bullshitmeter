import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import styled from 'styled-components';

import ArticleInfo from './ArticleInfo';
import VotingButtons from './VotingButtons';

const VotingButtonsContainer = styled.div`
  text-align: center;
  margin: 0.05em;
  padding-bottom: 1em;
`;

export default class MainSection extends Component {
  render() {
    return (
      <Container fluid>
        <VotingButtonsContainer>
          <VotingButtons
            onClick={() => console.log('assa')}
          />
        </VotingButtonsContainer>
        <ArticleInfo />
      </Container>
    );
  }
}
