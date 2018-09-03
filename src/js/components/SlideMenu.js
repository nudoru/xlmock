import React from 'react';
import PropTypes from 'prop-types';

class SlideMenu extends React.Component {

  static defaultProps = {
    isOpen: false
  };
  static propTypes = {
    isOpen: PropTypes.bool
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let {isOpen, children, ...rest} = this.props;

    let cls = ['c-slidemenu', 'c-slidemenu--right'];

    if (!isOpen) {
      cls.push('c-slidemenu--closed');
    } else {
      cls.push('c-slidemenu--open');
    }

    console.log('slide menu is', isOpen);

    return (<div className={cls.join(' ')} {...rest}>{children}</div>);
  }
}

export default SlideMenu;