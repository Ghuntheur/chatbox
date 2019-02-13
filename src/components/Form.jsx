import React from 'react';

class Form extends React.Component {
  state = {
    message: ''
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.createMessage();
  };

  handleChange = ev => {
    this.setState({ message: ev.target.value });
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
          maxLength="140"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <div className="info">140</div>
        <button type="submit">Envoyer</button>
      </form>
    );
  }
}

export default Form;
