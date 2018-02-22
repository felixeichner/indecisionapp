'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var liStyle = {
  marginBottom: 10
};

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: 'render',
    value: function render() {
      var title = 'Indecision App';
      var subtitle = 'Hand your decision over to the computer...';
      var options = ["Learn JavaScript", "Eat proper food", "Go grocery shopping"];
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { options: options }),
        React.createElement('br', null),
        React.createElement(Options, { options: options })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        this.props.subtitle && React.createElement(
          'h4',
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action(props) {
    _classCallCheck(this, Action);

    var _this3 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

    _this3.handlePick = _this3.handlePick.bind(_this3);
    return _this3;
  }

  _createClass(Action, [{
    key: 'handlePick',
    value: function handlePick() {
      var index = Math.floor(Math.random() * this.props.options.length);
      alert(this.props.options[index]);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.handlePick },
          'What shall I do next?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options(props) {
    _classCallCheck(this, Options);

    var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

    _this4.handleRemoveAll = _this4.handleRemoveAll.bind(_this4);
    return _this4;
  }

  _createClass(Options, [{
    key: 'handleRemoveAll',
    value: function handleRemoveAll() {
      alert("Remove " + this.props.options);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      if (this.props.options.length > 0) {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { onClick: this.handleRemoveAll },
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
            this.props.options.map(function (option) {
              return React.createElement(Option, { key: option, option: option, options: _this5.props.options });
            })
          ),
          React.createElement(AddOption, { options: this.props.options })
        );
      } else {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h4',
            null,
            'No options'
          ),
          React.createElement(AddOption, null)
        );
      }
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option(props) {
    _classCallCheck(this, Option);

    var _this6 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

    _this6.handleDelete = _this6.handleDelete.bind(_this6);
    return _this6;
  }

  _createClass(Option, [{
    key: 'handleDelete',
    value: function handleDelete() {
      this.props.options.splice(this.props.options.indexOf(this.props.option), 1);
      renderApp();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        { style: liStyle },
        this.props.option,
        ' ',
        React.createElement(
          'button',
          { onClick: this.handleDelete },
          'Delete'
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this7 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this7.handleAddOption = _this7.handleAddOption.bind(_this7);
    return _this7;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      if (option) {
        this.props.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
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
