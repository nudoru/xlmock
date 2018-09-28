import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from "react-router-dom";
import SVGIcon from "../components/SVGIcon";
import ButtonBar from "../components/ButtonBar";
import AlertBadge from "../components/AlertBadge";
import DropDown from "../components/Dropdown";
import {CatalogStructure} from '../store/model';

class Header extends React.Component {

  static defaultProps = {
    onAlertsClick: () => {},
    onMobileMenuClick: () => {}
  };
  static propTypes = {
    onAlertsClick: PropTypes.func,
    onMobileMenuClick: PropTypes.func
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  onHomeClick = () => {
    this.props.history.push('/');
  };

  onDiscoverClick = () => {
    this.props.history.push('/discover');
  };

  onTeamClick = () => {
    this.props.history.push('/team');
  };

  onCalendarClick = () => {
    this.props.history.push('/calendar');
  };

  onCatalogClick = () => {
    this.props.history.push('/search');
  };

  getCatalogNav() {
    // style={{width: '200px'}}
    // <DropDown.Heading>Start exploring our learning offerings by choosing a category below. </DropDown.Heading>
    return (
      <DropDown title='Catalog' setSelectedAsTitle={false} onLabelClick={this.onCatalogClick}>
        {Object.keys(CatalogStructure).map((k, i) => {
          return <DropDown.Entry onClick={this.onCatalogNavClick} id={k} key={i}>{CatalogStructure[k]}</DropDown.Entry>
        })}
      </DropDown>
    );
  }

  onCatalogNavClick = (e) => {
    console.log('catalog',e.target.id);
    this.props.history.push('/catalog/'+e.target.id);
  };

  render() {
    return (<div className='l-site-header'>
      <div className='l-site-header--mobile'>
        <ButtonBar negative className='c-site-header__nav--mobile'>
          <ButtonBar.Icon><a onClick={this.props.onMobileMenuClick}><SVGIcon name='menu'/></a></ButtonBar.Icon>
        </ButtonBar>
        <div className='c-site-header__logo'>
          <Link to='/'><img width='200px' src={require('../../img/RHLearning_tool_logo.png')}/></Link>
        </div>
        <ButtonBar negative className='c-site-header__nav--secondary'>
          <ButtonBar.Icon><a onClick={this.props.onAlertsClick}><SVGIcon name='bell'/><AlertBadge>3</AlertBadge></a></ButtonBar.Icon>
          <ButtonBar.Icon><Link to='/user'><SVGIcon name='user'/></Link></ButtonBar.Icon>
        </ButtonBar>

      </div>
      <div className='l-site-header--desktop'>
        <div className='c-site-header__logo'>
          <Link to='/'><img width='250px' src={require('../../img/RHLearning_tool_logo.png')}/></Link>
        </div>
        <div className='c-site-header__nav'>
          <DropDown title='Dashboard' setSelectedAsTitle={false}>
              <DropDown.Entry onClick={this.onHomeClick}>Overview</DropDown.Entry>
              <DropDown.Entry onClick={this.onDiscoverClick}>Discover</DropDown.Entry>
              <DropDown.Entry onClick={this.onTeamClick}>Team</DropDown.Entry>
          </DropDown>
          {this.getCatalogNav()}
          <button onClick={this.onCalendarClick} className='c-header-button'>Calendar</button>
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

export default withRouter(Header);