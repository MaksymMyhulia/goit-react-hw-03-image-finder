import React, { Component } from "react";
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import {
  ModalBackdrop,
  ModalContent,
  ModalDescr,
  ModalPicture,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleBackdropeClick);
  }

  handleKeyDown = e => {
    if (e.code === `Escape`) {
      this.props.onCloseModal();
    }
  };

  handleBackdropeClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;

    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropeClick}>
        <ModalContent>
          <ModalPicture src={largeImageURL} alt={tags} />
          <ModalDescr>{tags}</ModalDescr>
        </ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
};


Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};