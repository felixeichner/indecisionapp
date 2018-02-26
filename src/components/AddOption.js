import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    if (!error) { e.target.elements.option.value = '' };
    this.setState(() => ({ error }));
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="errorStyle">{this.state.error}</p>}
        <form onSubmit={this.handleAddOption} className="options-adder">
          <input type='text' name='option' className="options-adder__input"></input>
          <button type='submit' className="button">Add Option</button>
        </form>
      </div>
    );
  }
}