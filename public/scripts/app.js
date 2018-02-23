'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var liStyle = {
  marginBottom: 10
};

var errorStyle = {
  color: 'red'
};

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      title: 'Indecision App',
      subtitle: 'Hand your decision over to the computer...',
      options: ["Learn JavaScript", "Eat proper food", "Go grocery shopping"]
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var index = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[index]);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Invalid entry!';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'Item already listed!';
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (item) {
            return item != option;
          })
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, {
          title: this.state.title,
          subtitle: this.state.subtitle
        }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement('br', null),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h4',
      null,
      props.subtitle
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      'What shall I do next?'
    )
  );
};

var Options = function Options(props) {
  if (props.options.length > 0) {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: props.handleDeleteOptions },
        'Remove All'
      ),
      React.createElement(
        'h4',
        null,
        'Your options:'
      ),
      React.createElement(
        'ul',
        null,
        props.options.map(function (option) {
          return React.createElement(Option, {
            key: option,
            option: option,
            options: props.options,
            handleDeleteOption: props.handleDeleteOption
          });
        })
      )
    );
  } else {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h4',
        null,
        'No options'
      )
    );
  }
};

var Option = function Option(props) {
  return React.createElement(
    'li',
    { style: liStyle },
    props.option,
    ' ',
    React.createElement(
      'button',
      {
        onClick: props.handleDeleteOption.bind(undefined, props.option)
      },
      'Delete'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      if (!error) {
        e.target.elements.option.value = '';
      };
      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          { style: errorStyle },
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            { type: 'submit' },
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var renderApp = function renderApp() {
  return ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
};

renderApp();
