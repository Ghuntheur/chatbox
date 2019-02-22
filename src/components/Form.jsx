import React from 'react';

class Form extends React.Component {
  state = {
    message: '',
    length: this.props.length
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.createMessage();
  };

  handleChange = ev => {
    this.setState({
      message: ev.target.value,
      length: this.props.length - ev.target.value.length
    });
  };

  handleKeyUp = ev => {
    if (ev.key === 'Enter') this.createMessage();
  };

  createMessage = () => {
    const { addMessage, pseudo } = this.props;
    addMessage({ pseudo, message: this.state.message });
    this.setState({ message: '' });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <textarea
          required
          maxLength={this.props.length}
          value={this.state.message}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
        <div className="info">{this.state.length}</div>
        <button type="submit">Envoyer</button>
      </form>
    );
  }
}

export default Form;
