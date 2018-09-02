import React from 'react';
import PropTypes from 'prop-types';

class Label extends React.Component {

  static defaultProps = {};
  static propTypes = {
    negative: PropTypes.bool
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let {className = null, negative, children, ...rest} = this.props;
    let cls = ['c-label'];

    if (negative) {
      cls.push('c-label--negative');
    }

    cls.push(className);

    return <span className={cls.join(' ')} {...rest}>{children}</span>;
  }
}

export default Label;