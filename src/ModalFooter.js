import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import { createBootstrapComponent } from './ThemeProvider';

class ModalFooter extends React.Component {
  static propTypes = {
    bsPrefix: PropTypes.string,
    as: PropTypes.elementType,
  };

  static defaultProps = {
    as: 'div',
  };

  render() {
    const { as: Component, bsPrefix, className, ...props } = this.props;

    return <Component {...props} className={classNames(className, bsPrefix)} />;
  }
}

export default createBootstrapComponent(ModalFooter, 'modal-footer');
