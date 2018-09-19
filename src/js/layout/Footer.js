import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {RedHatLogo} from "../components/RedHatLogo";

class Footer extends React.PureComponent {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='l-site-footer'>
      <div className='c-site-footer__logo'>
        <RedHatLogo/>
      </div>
      <ul className='c-site-footer__nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/catalog'>Catalog</Link></li>
        <li><Link to='/calendar'>Calendar</Link></li>
        <li><Link to='/feedback'>Feedback</Link></li>
        <li><Link to='/help'>Help + Support</Link></li>
      </ul>
      <div className='c-site-footer__copyright'>
        Copyright ©2018 Red Hat, Inc.
      </div>
    </div>);
  }
}

export default Footer;