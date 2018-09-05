import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import SVGIcon from "../components/SVGIcon";
import ButtonBar from "../components/ButtonBar";
import AlertBadge from "../components/AlertBadge";

class Header extends React.Component {

  static defaultProps = {
    onAlertsClick: () => {}
  };
  static propTypes = {
    onAlertsClick: PropTypes.func
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='l-site-header'>
      <div className='l-site-header--mobile'>
        <ButtonBar negative className='c-site-header__nav--mobile'>
          <ButtonBar.Icon><a href="#"><SVGIcon name='menu'/></a></ButtonBar.Icon>
        </ButtonBar>
        <div className='c-site-header__logo'>
          <Link to='/'><img width='200px' src={require('../../img/RHLearning_tool_logo.png')}/></Link>
        </div>
        <ButtonBar negative className='c-site-header__nav--secondary'>
          <ButtonBar.Icon><Link to='/alerts'><SVGIcon name='bell'/><AlertBadge>3</AlertBadge></Link></ButtonBar.Icon>
          <ButtonBar.Icon><Link to='/user'><SVGIcon name='user'/></Link></ButtonBar.Icon>
        </ButtonBar>

      </div>
      <div className='l-site-header--desktop'>
        <div className='c-site-header__logo'>
          <Link to='/'><img width='250px' src={require('../../img/RHLearning_tool_logo.png')}/></Link>
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
        <ButtonBar negative className='c-site-header__nav--secondary'>
          <ButtonBar.Icon><Link to='/feedback'><SVGIcon name='message'/></Link></ButtonBar.Icon>
          <ButtonBar.Icon><Link to='/help'><SVGIcon name='help'/></Link></ButtonBar.Icon>
          <ButtonBar.Icon><a onClick={this.props.onAlertsClick}><SVGIcon name='bell'/><AlertBadge>3</AlertBadge></a></ButtonBar.Icon>
          <ButtonBar.Icon><Link to='/user'><SVGIcon name='user'/></Link></ButtonBar.Icon>
        </ButtonBar>
      </div>
    </div>);
  }
}

export default Header;