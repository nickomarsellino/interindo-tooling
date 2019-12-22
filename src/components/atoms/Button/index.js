// Button Component
// --------------------------------------------------------

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Button = ({
  className,
  type,
  to,
  size,
  color,
  variant,
  onClick,
  disabled,
  children
}) => {
  const classNames = classname('a-button', className, size, color, variant);
  return (
    <Fragment>
      {type === 'link' && (
        <a
          href={to}
          className={classNames}
          onClick={onClick}
        >
          {children}
        </a>
      )}
      {type === 'link-dom' && (
        <Link
          to={to}
          className={classNames}
          onClick={onClick}
        >
          {children}
        </Link>
      )}
      {(type === 'button' || type === 'submit') && (
        // eslint-disable-next-line react/button-has-type
        <button
          type={type}
          className={classNames}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </Fragment>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

Button.defaultProps = {
  className: '',
  type: 'button',
  to: '',
  size: '',
  color: '',
  variant: '',
  onClick: () => {},
  disabled: false,
  content: ''
};

export default Button;
