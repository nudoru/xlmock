import React from 'react';
import PropTypes from 'prop-types';

class SiteContainer extends React.Component {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let {children} = this.props;

    return (<div>{children}</div>);
  }
}

export default SiteContainer;