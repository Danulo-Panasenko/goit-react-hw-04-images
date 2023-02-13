import React from 'react';
import { PropTypes } from 'prop-types';

import styles from '../Button/Button.module.css';

const Button = ({ onLoadMore, text }) => {
  return (
    <button
      onClick={() => onLoadMore()}
      type="button"
      className={styles.load}
      aria-label="load more"
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
