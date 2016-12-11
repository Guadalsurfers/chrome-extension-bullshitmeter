import React, { Component, PropTypes } from 'react';
import Container from 'muicss/lib/react/container';
import styled from 'styled-components';

import { SHOW_ALL } from '../constants/TodoFilters';
import ArticleInfo from './ArticleInfo';
import VotingButtons from './VotingButtons';

const VotingButtonsContainer = styled.div`
  text-align: center;
  margin: 0.05em;
  padding-bottom: 1em;
`;

export default class MainSection extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  handleClearCompleted = () => {
    const atLeastOneCompleted = this.props.todos.some(todo => todo.completed);
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted();
    }
  };

  handleShow = (filter) => {
    this.setState({ filter });
  };

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
