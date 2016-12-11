import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';

const LogoBshit = styled.h1`
  marginTop: 0px;
  letter-spacing: -0.03em;
`;

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };

  render() {
    return (
      <header style={{ textAlign: 'center' }}>
        <LogoBshit>BULLSHITmeter</LogoBshit>
      </header>
    );
  }
}
