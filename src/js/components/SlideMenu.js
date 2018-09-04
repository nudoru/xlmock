import React from 'react';
import PropTypes from 'prop-types';
import ModalBlock from "./ModalBlock";

class SlideMenu extends React.Component {

  static defaultProps = {
    isOpen: false,
    block : true
  };
  static propTypes    = {
    isOpen      : PropTypes.bool,
    block       : PropTypes.bool,
    onBlockClick: PropTypes.object
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    let {isOpen, children, className = '', onBlockClick, ...rest} = this.props;

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
      {this.props.block ?
        <ModalBlock className={blockCls} onClickFn={onBlockClick}/> : null}
      <div className={cls.join(' ')} {...rest}>{children}</div>
    </React.Fragment>);
  }
}

export default SlideMenu;