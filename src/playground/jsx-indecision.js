const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ["First Option", "Second Option", "Third Option"]
};

const optionsList = () => {
  if (app.options && app.options.length > 0) {
    return (
      <span>
        <p><strong>Your Options:</strong></p>
        <ul>
          {app.options.map((option) => {
            return (
              <li key={option}>
                {option} <button onClick={() => {
                  app.options.splice(app.options.indexOf(option), 1);
                  renderTemplate();
                }}>Delete</button>
              </li>
            )
          })}
        </ul>
      </span>
    )
  } else {
    return <p><strong>No options</strong></p>;
  }
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

const onMakeDecision = () => {
  const index = Math.floor(Math.random() * app.options.length);
  alert(app.options[index]);
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
  const template = (
    <div>
    <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <button disabled={app.options && app.options.length === 0} onClick={onMakeDecision}>What shall I do next?</button>
      {optionsList()}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderTemplate();