import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from "./SVGIcon";

/**
 * TODO
 * - Animate open / close
 * - Itterate over children and add change handler
 */

class ExpandingMenu extends React.Component {

  static defaultProps = {
    isOpen: false
  };
  static propTypes = {
    open: PropTypes.bool,
    title: PropTypes.string
  };

  state = {
    isOpen: this.props.open
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  toggleMenu = () => {
    console.log('toggle!');
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {
    let {children, title, ...rest} = this.props;

    let contentsCls = ['c-expandingmenu__contents'];

    if(!this.state.isOpen) {
      contentsCls.push('c-expandingmenu__contents--closed');
    }

    return (<div className='c-expandingmenu' {...rest}>
      <div className='c-expandingmenu__header' onClick={this.toggleMenu}>
        <div className='c-expandingmenu__header__title'>{title}</div>
        <div className='c-expandingmenu__header__arrow'>
          {this.state.isOpen ? <SVGIcon name='chevron-down'/> : <SVGIcon name='chevron-up'/>}
        </div>
      </div>
      <div className={contentsCls.join(' ')}>{children}</div>
    </div>);
  }
}

export default ExpandingMenu;