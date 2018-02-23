class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visibility && <h4>This is the content to toggle!</h4>}
        </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggler</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide Details' : 'Show Details'}
//       </button>
//       {visibility && (<p>This is the text to toggle!</p>)}
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById("app"));
// }

// render();