import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { CgClose } from 'react-icons/cg';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { children, close } = this.props;
    const { closeModal } = this;

    return createPortal(
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.modal}>
          <button
            type="button"
            aria-label="close button"
            className={styles.close}
            onClick={close}
          >
            <CgClose />
          </button>
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
