import React from 'react';
import PropTypes from 'prop-types';

class ButtonBar extends React.PureComponent {

  static Icon = ({children, ...rest}) => <li {...rest}>{children}</li>

  static defaultProps = {};
  static propTypes = {
    negative: PropTypes.bool
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let {negative, children, className='', ...rest} = this.props;

    let cls = ['c-button-bar__icons'];

    if (negative) {
      cls.push('c-button-bar__icons--negative');
    }

    cls.push(className)

    return (<div className={cls.join(' ')}><ul>{children}</ul></div>);
  }
}

export default ButtonBar;