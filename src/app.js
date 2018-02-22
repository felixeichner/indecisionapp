// JSX content

const navButtonStyle = {
  margin: 15,
  padding: 10
};

// template Indecision
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};


// template Counter
let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};


// rendering
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateCounter = (
    <div>
      <button onClick={renderIndecisionApp} style={navButtonStyle}>Render Indecision App</button>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateCounter, appRoot);
};

const renderIndecisionApp = () => {
  const templateIndecision = (
    <div>
    <button onClick={renderCounterApp} style={navButtonStyle}>Render Counter App</button>
    <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
    </div>
  );
  ReactDOM.render(templateIndecision, appRoot);
};

renderCounterApp();