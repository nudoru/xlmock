import React from 'react';
import PropTypes from 'prop-types';

/**
 * Fade in / out animations controlled by parent component by applying the
 * visible and hidden classNames to this component
 */

class ModalBlock extends React.PureComponent {

  static defaultProps = {};
  static propTypes    = {
    onClickFn: PropTypes.func
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    let {onClickFn, className = '', ...rest} = this.props;

    let cls = ['c-modalblock'];

    if (onClickFn) {
      cls.push('c-modalblock--active');
    } else {
      onClickFn = () => {
      };
      cls.push('c-modalblock--inactive');
    }

    cls.push(className);

    return <div onClick={onClickFn} className={cls.join(' ')} {...rest} />
  }
}

export default ModalBlock;