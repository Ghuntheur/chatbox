import React from 'react';
import './App.css';

import Form from './components/Form';
import Message from './components/Message';

class App extends React.Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  };

  addMessage = message => {
    const messages = { ...this.state.messages };
    const timestamp = `message-${Date.now()}`;
    messages[timestamp] = message;
    this.setState({ messages });
  };

  render() {
    return (
      <div className="box">
        <div className="messages" />
        <Form pseudo={this.state.pseudo} addMessage={this.addMessage} />
      </div>
    );
  }
}

export default App;
