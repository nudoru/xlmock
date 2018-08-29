import React from 'react';
import PropTypes from 'prop-types';

// TODO
// light positive? this is negative

export class BigTabs extends React.Component {

  static Tab = (props) => {
    let {children, className} = props;
    let cls = [];

    if(props.active) {
      cls.push('is-active');
    }

    cls.push(className);

    return <li className={cls.join(' ')}>{children}</li>
  }

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
    let {className, children} = this.props;

    let cls = ['c-big-tabs']

    if(this.props.negative) {
      cls.push('c-big-tabs--negative');
    }

    cls.push(className);

    return (
      <ul className={cls.join(' ')}>
        {children}
      </ul>
    );
  }
}