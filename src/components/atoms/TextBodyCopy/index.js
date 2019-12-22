// TextBodyCopy Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const TextBodyCopy = ({ className, color, weight, children }) => {
  const classNames = classname('a-text-body-copy', className, color, weight);
  return <p className={classNames}>{children}</p>;
};

TextBodyCopy.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  children: PropTypes.node
};

TextBodyCopy.defaultProps = {
  className: '',
  color: '',
  weight: '',
  children: ''
};

export default TextBodyCopy;
