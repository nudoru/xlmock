import React from 'react';
import PropTypes from 'prop-types';

class Tag extends React.Component {

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
    let {className=null, children, ...rest} = this.props;

    let cls = ['c-tag'];

    if(this.props.negative) {
      cls.push('c-tag--negative');
    }

    cls.push(className);

    return <div className={cls.join(' ')} {...rest}>{children}</div>;
  }
}

export default Tag;