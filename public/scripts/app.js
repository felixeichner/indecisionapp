'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ["First Option", "Second Option", "Third Option"]
};

var optionsList = function optionsList() {
  if (app.options && app.options.length > 0) {
    return React.createElement(
      'span',
      null,
      React.createElement(
        'p',
        null,
        React.createElement(
          'strong',
          null,
          'Your Options:'
        )
      ),
      React.createElement(
        'ul',
        null,
        app.options.map(function (option) {
          return React.createElement(
            'li',
            { key: option },
            option,
            ' ',
            React.createElement(
              'button',
              { onClick: function onClick() {
                  app.options.splice(app.options.indexOf(option), 1);
                  renderTemplate();
                } },
              'Delete'
            )
          );
        })
      )
    );
  } else {
    return React.createElement(
      'p',
      null,
      React.createElement(
        'strong',
        null,
        'No options'
      )
    );
  }
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

var onMakeDecision = function onMakeDecision() {
  var index = Math.floor(Math.random() * app.options.length);
  alert(app.options[index]);
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
  var template = React.createElement(
    'div',
    null,
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
      'button',
      { disabled: app.options && app.options.length === 0, onClick: onMakeDecision },
      'What shall I do next?'
    ),
    optionsList(),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderTemplate();
