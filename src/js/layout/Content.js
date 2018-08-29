import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {

  static defaultProps = {};
  static propTypes = {
    fullscreenElement: PropTypes.bool
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let cls = this.props.full ? 'l-site-content--full' : 'l-site-content';

    return (<div className={cls}>{this.props.children}</div>);
  }
}

export default Content;