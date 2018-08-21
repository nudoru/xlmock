import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from "../components/SVGIcon";

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
          <a href='#'>RED HAT | XL LOGO SVG</a>
        </div>
        <div className='c-site-header__nav--secondary'>
          <ul>
            <li><a href='#'><SVGIcon name='message'/></a></li>
            <li><a href='#'><SVGIcon name='user'/></a></li>
          </ul>
        </div>

      </div>
      <div className='l-site-header--desktop'>
        <div className='c-site-header__logo'>
          <a href='#'>RED HAT | XL LOGO SVG</a>
        </div>
        <div className='c-site-header__nav'>
          <ul>
            <li><a href='#'>Catalog</a></li>
            <li><a href='#'>Calendar</a></li>
          </ul>
        </div>
        <div className='c-site-header__search'>
          <SVGIcon name='search' />What do you want to learn?
        </div>
        <div className='c-site-header__nav--secondary'>
          <ul>
            <li><a href='#'><SVGIcon name='message'/></a></li>
            <li><a href='#'><SVGIcon name='help'/></a></li>
            <li><a href='#'><SVGIcon name='bell'/></a></li>
            <li><a href='#'><SVGIcon name='user'/></a></li>
          </ul>
        </div>
      </div>
    </div>);
  }
}

export default Header;