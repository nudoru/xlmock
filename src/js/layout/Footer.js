import React from 'react';
import PropTypes from 'prop-types';
import {RedHatLogo} from "../components/RedHatLogo";

class Footer extends React.Component {

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
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Catalog</a></li>
        <li><a href='#'>Calendar</a></li>
        <li><a href='#'>Feedback</a></li>
        <li><a href='#'>Help + Support</a></li>
      </ul>
      <div className='c-site-footer__copyright'>
        Copyright ©2018 Red Hat, Inc.
      </div>
    </div>);
  }
}

export default Footer;