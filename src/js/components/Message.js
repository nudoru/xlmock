import React from 'react';
import PropTypes from 'prop-types';

class Message extends React.PureComponent {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {className=null, children, ...rest} = this.props;

    let cls = ['c-message'];
    cls.push(className);

    return (<div className={cls.join(' ')} {...rest}>{children}</div>);
  }
}

export default Message;