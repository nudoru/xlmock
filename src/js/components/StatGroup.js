import React from 'react';
import PropTypes from 'prop-types';

class StatGroup extends React.PureComponent {

  static Data = ({children}) => <p className='c-stat-group__data'>{children}</p>;
  static Label= ({children}) => <h1 className='c-stat-group__label'>{children}</h1>;

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