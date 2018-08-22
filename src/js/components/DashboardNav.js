import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
        <li className='is-active'><Link to='/'>Overview</Link></li>
        <li><Link to='/discover'>Discover</Link></li>
        <li><Link to='/team'>Team</Link></li>
      </ul>
    </div>);
  }
}

export default DashboardNav;