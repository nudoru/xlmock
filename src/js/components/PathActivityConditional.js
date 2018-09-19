import React from 'react';
import PropTypes from 'prop-types';

class PathActivityConditional extends React.PureComponent {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='l-path-detail__conditional'><p>{this.props.children}</p></div>);
  }
}

export default PathActivityConditional;