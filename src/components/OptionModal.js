import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <strong>{props.selectedOption}</strong>}
    <p><button onClick={props.handleClearSelectedOption}>Okay</button></p>
  </Modal>
);

export default OptionModal;