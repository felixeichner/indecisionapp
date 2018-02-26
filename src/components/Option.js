import React from 'react';

const Option = (props) => (
  <li className="options-item">
    {props.option} <button 
      onClick={(e) => {props.handleDeleteOption(props.option)}}
      className="button button--link"
    >Delete</button>
  </li>
);

export default Option;