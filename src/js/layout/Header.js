import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import SVGIcon from "../components/SVGIcon";
import {SiteLogo} from "../components/SiteLogo";

class Header extends React.Component {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='l-site-header'>
      <div className='l-site-header--mobile'>
        <div className='c-site-header__nav--mobile'>
          <ul>
            <li><a href='#'><SVGIcon name='menu'/></a></li>
          </ul>
        </div>
        <div className='c-site-header__logo'>
          <Link to='/'><SiteLogo/></Link>
        </div>
        <div className='c-site-header__nav--secondary'>
          <ul>
            <li><Link to='/alerts'><SVGIcon name='bell'/></Link></li>
            <li><Link to='/user'><SVGIcon name='user'/></Link></li>
          </ul>
        </div>

      </div>
      <div className='l-site-header--desktop'>
        <div className='c-site-header__logo'>
          <Link to='/'><SiteLogo/></Link>
        </div>
        <div className='c-site-header__nav'>
          <ul>
            <li><Link to='/catalog'>Catalog</Link></li>
            <li><Link to='/calendar'>Calendar</Link></li>
          </ul>
        </div>
        <div className='c-site-header__search'>
          <Link to='/search'><SVGIcon name='search' className='u-icon-button--left'/></Link>What do you want to learn?
        </div>
        <div className='c-site-header__nav--secondary'>
          <ul>
            <li><Link to='/feedback'><SVGIcon name='message'/></Link></li>
            <li><Link to='/help'><SVGIcon name='help'/></Link></li>
            <li><Link to='/alerts'><SVGIcon name='bell'/></Link></li>
            <li><Link to='/user'><SVGIcon name='user'/></Link></li>
          </ul>
        </div>
      </div>
    </div>);
  }
}

export default Header;