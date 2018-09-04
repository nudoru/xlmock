import React from 'react';
import PropTypes from 'prop-types';
import ModalBlock from "./ModalBlock";
import ButtonBar from "./ButtonBar";
import SVGIcon from "./SVGIcon";

class SlideMenu extends React.Component {

  static Header = (props) => <div className='c-slidemenu__header' {...props} />;
  static Icon = (props) => <div className='c-slidemenu__header__icon' {...props} />;
  static Title = (props) => <div className='c-slidemenu__header__title' {...props} />;

  static Close = ({onCloseClick, children}) => <div className='c-slidemenu__header__close'>
    <ButtonBar>
      <ButtonBar.Icon><a onClick={onCloseClick}>{children}</a></ButtonBar.Icon>
    </ButtonBar>
  </div>;

  static Section = (props) => <div className='c-slidemenu__section' {...props} />;

  static defaultProps = {
    isOpen: false,
    block : true
  };
  static propTypes    = {
    isOpen      : PropTypes.bool,
    block       : PropTypes.bool,
    onBlockClick: PropTypes.func
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    let {isOpen, children, className = '', onBlockClick, block, ...rest} = this.props;

    let cls      = ['c-slidemenu', 'c-slidemenu--right'];
    let blockCls = 'c-modalblock--visible';

    if (!isOpen) {
      cls.push('c-slidemenu--closed');
      blockCls = 'c-modalblock--hidden'
    } else {
      cls.push('c-slidemenu--open');
    }

    cls.push(className);

    return (<React.Fragment>
      {block ?
        <ModalBlock className={blockCls} onClickFn={onBlockClick}/> : null}
      <div className={cls.join(' ')} {...rest}>
        <div className='c-slidemenu__content'>
          {children}
        </div>
      </div>
    </React.Fragment>);
  }
}

export default SlideMenu;