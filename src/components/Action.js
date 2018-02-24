import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What shall I do next?
      </button>
    </div>
  );
};

export default Action;