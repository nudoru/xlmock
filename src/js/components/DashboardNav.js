import React from 'react';
import PropTypes from 'prop-types';

class DashboardNav extends React.Component {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let {children} = this.props;

    return (<div className='c-site-dashboard__nav'>
      <ul>
        <li className='is-active'><a href='#'>Overview</a></li>
        <li><a href='#'>Discover</a></li>
        <li><a href='#'>Team</a></li>
      </ul>
    </div>);
  }
}

export default DashboardNav;