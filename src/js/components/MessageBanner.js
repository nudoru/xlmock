import React from 'react';
import PropTypes from 'prop-types';

class MessageBanner extends React.PureComponent {

  static Icon = ({children}) => <div
    className='c-message-banner__icon'>{children}</div>;
  static BoxedIcon = ({children}) => <div
    className='c-message-banner__boxicon'>{children}</div>;
  static Message   = ({children}) => <div
    className='c-message-banner__message'>{children}</div>;
  static CTA       = ({children}) => <div
    className='c-message-banner__cta'>{children}</div>;

  static defaultProps = {
    negative: false
  };
  static propTypes    = {
    negative: PropTypes.bool
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const {children, className = null, negative, ...rest} = this.props;

    let cls = ['c-message-banner'];

    if (negative) {
      cls.push('c-message-banner--negative');
    }

    cls.push(className);

    return (<div className={cls.join(' ')} {...rest}>
      {children}
    </div>);
  }
}

export default MessageBanner;