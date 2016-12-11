import React, { Component, PropTypes } from 'react';

import { SHOW_ALL } from '../constants/TodoFilters';
import ArticleInfo from './ArticleInfo';
import VotingButtons from './VotingButtons';
import Container from 'muicss/lib/react/container';

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
        <ArticleInfo />

        <div
          style={{ textAlign: 'center' }}
        >
          <VotingButtons
            onClick={() => console.log('assa')}
          />
        </div>
      </Container>
    );
  }
}
