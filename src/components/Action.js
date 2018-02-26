import React from 'react';

const Action = (props) => (
  <div className='action'>
    <button className="button big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What shall I do next?
    </button>
  </div>
);

export default Action;