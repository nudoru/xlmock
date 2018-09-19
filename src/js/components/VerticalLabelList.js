import React from 'react';
import PropTypes from 'prop-types';

class VerticalLabelList extends React.PureComponent {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='c-label__vlist'>{this.props.children}</div>);
  }
}

export default VerticalLabelList;