const liStyle = {
  marginBottom: 10
};

const errorStyle = {
  color: 'red'
}

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      title: 'Indecision App',
      subtitle: 'Hand your decision over to the computer...',
      options: ["Learn JavaScript", "Eat proper food", "Go grocery shopping"]
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    const index = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[index]);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Invalid entry!'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Item already listed!'
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    });
  }
  handleDeleteOption(option) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter(item => item != option)
      }
    });
  }
  render() {
    return (
      <div>
        <Header
          title={this.state.title}
          subtitle={this.state.subtitle}
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

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.subtitle && <h4>{this.props.subtitle}</h4>}
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What shall I do next?
        </button>
      </div>
    );
  }  
}

class Options extends React.Component {
  render() {
    if (this.props.options.length > 0) {
      return (
        <div>
          <button onClick={this.props.handleDeleteOptions}>Remove All</button>
          <h4>Your options:</h4>
          <ul>
            {this.props.options.map((option) => <Option 
                                                  key={option}
                                                  option={option}
                                                  options={this.props.options}
                                                  handleDeleteOption={this.props.handleDeleteOption}
                                                />
            )}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h4>No options</h4>
        </div>
      );
    }
  }
}

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }
  handleDeleteOption() {
    this.props.handleDeleteOption(this.props.option);
  }
  render() {
    return (
      <li style={liStyle}>
        {this.props.option} <button onClick={this.handleDeleteOption}>Delete</button>
      </li>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    if (!error) { e.target.elements.option.value = '' };
    this.setState(() => {
      return { error };
    });
  };
  render() {
    return (
      <div>
        {this.state.error && <p style={errorStyle}>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option'></input>
          <button type='submit'>Add Option</button>
        </form>
      </div>
    );
  }
}

const renderApp = () => ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

renderApp();