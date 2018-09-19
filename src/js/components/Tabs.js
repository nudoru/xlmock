import React from 'react';
import PropTypes from 'prop-types';

// TODO
// light positive? this is negative

export class Tabs extends React.PureComponent {

  static Tab = (props) => {
    let {children, className} = props;
    let cls = [];

    if(props.active) {
      cls.push('is-active');
    }

    cls.push(className);

    return <li className={cls.join(' ')}>{children}</li>
  };

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
    let {className=null, children, negative, ...rest} = this.props;

    let cls = ['c-tabs'];

    if(this.props.negative) {
      cls.push('c-tabs--negative');
    }

    cls.push(className);

    return (
      <ul className={cls.join(' ')} {...rest}>
        {children}
      </ul>
    );
  }
}