const app = {
  title: 'Indecision App',
  subtitle: 'Hand your decision over to the computer...',
  options: ["First Option", "Second Option", "Third Option"]
};

const liStyle = {
  marginBottom: 10
};

class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <br />
        <Options />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h4>{app.subtitle}</h4>}
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button onClick={onMakeDecision}>What shall I do next?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    if (app.options.length > 0) {
      return (
        <div>
          <h4>Your options:</h4>
          <ul>
            <Option />
          </ul>
          <AddOption />
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
  render() {
    return (
      app.options.map((option) => {
        return (
          <li key={option} style={liStyle}>
            {option} <button onClick={() => {
              app.options.splice(app.options.indexOf(option), 1);
              renderApp();
            }}>Delete</button>
          </li>
        );
      })
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'></input>
        <button type='submit'>Add Option</button>
      </form>
    );
  }
}

const onMakeDecision = () => {
  const index = Math.floor(Math.random() * app.options.length);
  alert(app.options[index]);
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const renderApp = () => ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

renderApp();