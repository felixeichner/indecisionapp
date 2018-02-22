const liStyle = {
  marginBottom: 10
};

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App';
    const subtitle = 'Hand your decision over to the computer...';
    let options = ["Learn JavaScript", "Eat proper food", "Go grocery shopping"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action options={options} />
        <br />
        <Options options={options} />
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
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
  }
  handlePick() {
    const index = Math.floor(Math.random() * this.props.options.length);
    alert(this.props.options[index]);
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What shall I do next?</button>
      </div>
    );
  }  
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    alert("Remove " + this.props.options);
  }
  render() {
    if (this.props.options.length > 0) {
      return (
        <div>
          <button onClick={this.handleRemoveAll}>Remove All</button>
          <h4>Your options:</h4>
          <ul>
            {this.props.options.map((option) => <Option key={option} option={option} options={this.props.options}/>)}
          </ul>
          <AddOption options={this.props.options}/>
        </div>
      );
    } else {
      return (
        <div>
          <h4>No options</h4>
          <AddOption />
        </div>
      );
    }
  }
}

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.options.splice(this.props.options.indexOf(this.props.option), 1);
    renderApp();
  }
  render() {
    return (
      <li style={liStyle}>
        {this.props.option} <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      this.props.options.push(option);
      e.target.elements.option.value = '';
      renderApp();
    }
  };
  render() {
    return (
      <div>
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