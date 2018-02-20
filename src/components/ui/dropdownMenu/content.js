import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static contextTypes = {
    isClose: PropTypes.bool
  }

  render() {
    const { className, children } = this.props;

    if( this.context.isClose ) {
      return null;
    }

    return (
      <div className={className}>{children}</div>
    );
  }
}