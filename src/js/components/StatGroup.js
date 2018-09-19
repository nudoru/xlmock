import React from 'react';
import PropTypes from 'prop-types';

class StatGroup extends React.PureComponent {

  static Data = ({children, small}) => {
    let cls = small ? 'c-stat-group__data--small' : 'c-stat-group__data';
    return <p className={cls}>{children}</p>
  };

  static Label= ({children, small}) => {
    let cls = small ? 'c-stat-group__label--small' : 'c-stat-group__label';
    return <h1 className={cls}>{children}</h1>
  };

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {className=null, children, ...rest} = this.props;

    let cls = ['c-stat-group'];
    cls.push(className);

    return (<div className={cls.join(' ')} {...rest}>{children}</div>);
  }
}

export default StatGroup;