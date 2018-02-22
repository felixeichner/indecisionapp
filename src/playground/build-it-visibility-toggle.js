let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggler</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (<p>This is the text to toggle!</p>)}
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"));
}

render();