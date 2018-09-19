import React from 'react';

class AlertBadge extends React.PureComponent {

  static defaultProps = {};
  static propTypes    = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return <div className='c-alert-badge'>{this.props.children}</div>;
  }
}

export default AlertBadge;