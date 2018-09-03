import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

  static defaultProps = {};
  static propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    negative: PropTypes.bool
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let {children, primary, secondary, negative, className=null, ...rest} = this.props;
    let cls = ['c-button'];

    if(primary && !negative) {
      cls.push('c-button--primary');
    } else if(primary && negative) {
      cls.push('c-button--primary-negative');
    } else if(!primary && negative) {
      cls.push('c-button--negative');
    }

    cls.push(className);

    return <button className={cls.join(' ')} {...rest}>{children}</button>
  }
}

export default Button;