import React from 'react';
import Option from './Option';

const Options = (props) => {
  if (props.options.length > 0) {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        <h4>Your options:</h4>
        <ul>
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
      <div>
        <h4>No options</h4>
      </div>
    );
  }
};

export default Options;