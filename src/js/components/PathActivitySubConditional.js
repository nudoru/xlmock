import React from 'react';
import PropTypes from 'prop-types';

class PathActivityConditional extends React.Component {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='l-path-detail__subconditional'><p>{this.props.children}</p></div>);
  }
}

export default PathActivityConditional;