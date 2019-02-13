import React from 'react';
import Redirect from 'react-router-dom/Redirect';

class Connection extends React.Component {
  state = {
    pseudo: '',
    goToChat: false
  };

  handleChange = ev => {
    this.setState({ pseudo: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();

    this.setState({ goToChat: true });
    console.log(this.state);
  };

  render() {
    const { goToChat } = this.state;

    return (
      <>
        {goToChat ? (
          <Redirect to={`/pseudo/${this.state.pseudo}`} />
        ) : (
          <div className="connexionBox">
            <form className="connexion" onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.pseudo}
                onChange={this.handleChange}
                placeholder="pseudo"
                required
              />
              <button>Go</button>
            </form>
          </div>
        )}
      </>
    );
  }
}

export default Connection;
