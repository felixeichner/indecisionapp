import React from 'react';
import Option from './Option';

const Options = (props) => {
  if (props.options.length > 0) {
    return (
      <div>
        <div className="options-header">
          <h4>Your options:</h4>
          <button onClick={props.handleDeleteOptions} className="button button--link">Remove All</button>
        </div>
        <ul className="options-list">
          {
            props.options.map((option) => (
              <Option 
                key={option}
                option={option}
                options={props.options}
                handleDeleteOption={props.handleDeleteOption}
              />
            ))
          }
        </ul>
      </div>
    );
  } else {
    return (
      <div className="options-header">
        <h4>Please add some options to choose from</h4>
      </div>
    );
  }
};

export default Options;