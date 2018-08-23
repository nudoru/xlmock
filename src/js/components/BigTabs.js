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
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let {children} = this.props;

    return (
      <ul className='c-big-tabs'>
        {children}
      </ul>
    );
  }
}