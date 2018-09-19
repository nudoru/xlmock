import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.PureComponent {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let {className = '', children, ...rest} = this.props;

    let cls = ['c-card', className];

    return (<div className={cls.join(' ')} {...rest}>{children}</div>);
  }
}

export default Card;