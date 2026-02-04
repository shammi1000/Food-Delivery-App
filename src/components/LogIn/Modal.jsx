import React from 'react';
import './Modal.css';
import { images } from '../../constants';
const Modal = ({onClose, children }) => {
  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}><img src={images.logo} alt="" /></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
