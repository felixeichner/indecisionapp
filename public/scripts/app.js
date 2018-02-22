'use strict';

// JSX content

var navButtonStyle = {
  margin: 15,
  padding: 10
};

// template Indecision
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

// template Counter
var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};

// rendering
var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateCounter = React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: renderIndecisionApp, style: navButtonStyle },
      'Render Indecision App'
    ),
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );
  ReactDOM.render(templateCounter, appRoot);
};

var renderIndecisionApp = function renderIndecisionApp() {
  var templateIndecision = React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: renderCounterApp, style: navButtonStyle },
      'Render Counter App'
    ),
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item one'
      ),
      React.createElement(
        'li',
        null,
        'Item two'
      )
    )
  );
  ReactDOM.render(templateIndecision, appRoot);
};

renderCounterApp();
