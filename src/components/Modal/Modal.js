import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  state = {};

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillMount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  handleCloseModal = e => {
    const { onClick } = this.props;
    if (e.code === 'Escape') {
      onClick();
    }
  };

  render() {
    const { onClick, children } = this.props;

    return (
      <div className={styles.Overlay} onClick={onClick}>
        <div className={styles.Modal}>{children}</div>
      </div>
    );
  }
}
