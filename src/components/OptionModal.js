import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Do this:</h3>
    {props.selectedOption && (<p className="modal__option">{props.selectedOption}</p>)}
    <p><button onClick={props.handleClearSelectedOption} className="button">Okay</button></p>
  </Modal>
);

export default OptionModal;