import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='l-site-content'>{this.props.children}</div>);
  }
}

export default Content;