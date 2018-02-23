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
      options: props.options
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

IndecisionApp.defaultProps = {
  options: ['Walhalla', 'Dicker Engel', 'Arema', 'Tônis']
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h4>{props.subtitle}</h4>}
    </div>    
  );
};

Header.defaultProps = {
  title: 'Indecision App'
}

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What shall I do next?
      </button>
    </div>
  );
};

const Options = (props) => {
  if (props.options.length > 0) {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        <h4>Your options:</h4>
        <ul>
          {props.options.map((option) => <Option 
                                           key={option}
                                           option={option}
                                           options={props.options}
                                           handleDeleteOption={props.handleDeleteOption}
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
};

const Option = (props) => {
  return (
    <li style={liStyle}>
      {props.option} <button
                            onClick={props.handleDeleteOption.bind(this, props.option)}
                          >
                            Delete
                          </button>
    </li>
  );
};

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
