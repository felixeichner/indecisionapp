const liStyle = {
  marginBottom: 10
};

import React from 'react';

const Option = (props) => (
  <li style={liStyle}>
    {props.option} <button onClick={(e) => {props.handleDeleteOption(props.option)}}>Delete</button>
  </li>
);

export default Option;