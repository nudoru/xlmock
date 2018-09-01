// Using Feather icons https://feathericons.com/

import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({name = '', viewBox = '0 0 24 24', width = '24', height = '24', children}) =>
  <svg xmlns="http://www.w3.org/2000/svg" width={width}
       height={height} viewBox={viewBox} fill="none"
       stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round"
       className={'feather feather-' + name}>{children}</svg>;

const Flag = () => <SVG name='flag'>
  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
  <line x1="4" y1="22" x2="4" y2="15"/>
</SVG>;

const Menu = () => <SVG name='menu'>
  <line x1="3" y1="12" x2="21" y2="12"/>
  <line x1="3" y1="6" x2="21" y2="6"/>
  <line x1="3" y1="18" x2="21" y2="18"/>
</SVG>;

const Grid = () => <SVG name='grid'>
  <rect x="3" y="3" width="7" height="7"/>
  <rect x="14" y="3" width="7" height="7"/>
  <rect x="14" y="14" width="7" height="7"/>
  <rect x="3" y="14" width="7" height="7"/>
</SVG>;

const List = () => <SVG name='list'>
  <line x1="8" y1="6" x2="21" y2="6"/>
  <line x1="8" y1="12" x2="21" y2="12"/>
  <line x1="8" y1="18" x2="21" y2="18"/>
  <line x1="3" y1="6" x2="3" y2="6"/>
  <line x1="3" y1="12" x2="3" y2="12"/>
  <line x1="3" y1="18" x2="3" y2="18"/>
</SVG>;

const ChevronDown = () => <SVG name='chevron-down'>
  <polyline points="6 9 12 15 18 9"/>
</SVG>;

const Search = () => <SVG name='search'>
  <circle cx="11" cy="11" r="8"/>
  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
</SVG>;

const Bell = () => <SVG name='bell'>
  <path
    d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"/>
</SVG>;

const User = () => <SVG name='user'>
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
  <circle cx="12" cy="7" r="4"/>
</SVG>;

const Mobile = () => <SVG name='smartphone'>
  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
  <line x1="12" y1="18" x2="12" y2="18"/>
</SVG>;

const Box = () => <SVG name='box'>
  <path
    d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"/>
  <polyline points="2.32 6.16 12 11 21.68 6.16"/>
  <line x1="12" y1="22.76" x2="12" y2="11"/>
</SVG>;

const Package = () => <SVG name='package'>
  <path
    d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"/>
  <polyline points="2.32 6.16 12 11 21.68 6.16"/>
  <line x1="12" y1="22.76" x2="12" y2="11"/>
  <line x1="7" y1="3.5" x2="17" y2="8.5"/>
</SVG>;

const Message = () => <SVG name='message'>
  <path
    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
</SVG>;

const Help = () => <SVG name='help'>
  <circle cx="12" cy="12" r="10"/>
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
  <line x1="12" y1="17" x2="12" y2="17"/>
</SVG>;


const Check = () => <SVG name='check'>
  <polyline points="20 6 9 17 4 12"></polyline>
</SVG>

const CheckSquare = () => <SVG name='check-square'>
  <polyline points="9 11 12 14 22 4"></polyline>
  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
</SVG>

const CheckCircle = () => <SVG name='check-circle'>
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
  <polyline points="22 4 12 14.01 9 11.01"></polyline>
</SVG>

const Circle = () => <SVG name='circle'>
  <circle cx="12" cy="12" r="10"></circle>
</SVG>

const Square = () => <SVG name='square'>
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
</SVG>

const X = () => <SVG name='x'>
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</SVG>

const XCircle = () => <SVG name='x-circle'>
  <circle cx="12" cy="12" r="10"></circle>
  <line x1="15" y1="9" x2="9" y2="15"></line>
  <line x1="9" y1="9" x2="15" y2="15"></line>
</SVG>

const XSquare = () => <SVG name='x-square'>
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  <line x1="9" y1="9" x2="15" y2="15"></line>
  <line x1="15" y1="9" x2="9" y2="15"></line>
</SVG>


const Icon = (props) => {
  switch (props.name) {
    case "flag":
      return <Flag {...props}/>;
    case "menu":
      return <Menu {...props}/>;
    case "grid":
      return <Grid {...props}/>;
    case "list":
      return <List {...props}/>;
    case "chevron-down":
      return <ChevronDown {...props}/>;
    case "search":
      return <Search {...props}/>;
    case "bell":
      return <Bell {...props}/>;
    case "user":
      return <User {...props}/>;
    case "mobile":
      return <Mobile {...props}/>;
    case "box":
      return <Box {...props}/>;
    case "package":
      return <Package {...props}/>;
    case "message":
      return <Message {...props}/>;
    case "help":
      return <Help {...props}/>;
    case "check":
      return <Check {...props}/>;
    case "check-square":
      return <CheckSquare {...props}/>;
    case "check-circle":
      return <CheckCircle {...props}/>;
    case "circle":
      return <Circle {...props}/>;
    case "square":
      return <Square {...props}/>;
    case "x":
      return <X {...props}/>;
    case "x-square":
      return <XSquare {...props}/>;
    case "x-circle":
      return <XCircle {...props}/>;
    default:
      return <span>Icon?</span>
  }
};

class SVGIcon extends React.Component {

  static defaultProps = {};
  static propTypes    = {
    name  : PropTypes.string,
    large : PropTypes.bool,
    square: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    let {name, className = '', large, square} = this.props;
    let cls                                   = ['u-svgicon'];

    if (large) {
      cls.push('u-svgicon--large');
    } else if (square) {
      // TODO remove?
      cls.push('c-icon_square--large');
    }

    cls.push(className);

    return (<div className={cls.join(' ')}><Icon name={name}/></div>);
  }
}

export default SVGIcon;