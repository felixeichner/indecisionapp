class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    }
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleReset() {
    this.setState((prevState, props) => {
      return {
        count: props.count
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleMinusOne}> -1 </button>
        <button onClick={this.handleAddOne}> +1 </button>
        <button onClick={this.handleReset}> reset </button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter count={5} />, document.getElementById("app"));

/*
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

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateCounter = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateCounter, appRoot);
};

renderCounterApp();
*/