import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
  state = {
    options: []
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (option) => {
    this.setState((prevState) => ({ options: prevState.options.filter((item) => item !== option) }));
  };
  handlePick = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[index]);
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Invalid entry!'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Item already listed!'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log("Component Will Unmount!");
  }
  render() {
    const subtitle = 'Hand your decision over to the computer...';
    return (
      <div>
        <Header
          subtitle={subtitle}
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <br />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}