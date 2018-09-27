import React from 'react';
import PropTypes from 'prop-types';

class ChipGroup extends React.PureComponent {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {className=null, children, ...rest} = this.props;

    let cls = ['c-chip-group'];
    cls.push(className);

    return (<div className={cls.join(' ')} {...rest}>{children}</div>);
  }
}

export default ChipGroup;