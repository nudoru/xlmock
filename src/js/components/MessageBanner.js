import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";

// TODO
// icon as prop
// buttons children
// space between buttons
// light / dark variant

class MessageBanner extends React.Component {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='c-banner-message negative'>
      <div className='c-banner-message__icon'>
        [I]
      </div>
      <div className='c-banner-message__message'>
        <h1>{this.props.children}</h1>
      </div>
      <div className='c-banner-message__cta'>
        <Button negative>Dismiss</Button>
        <Button primary negative>View class</Button>
      </div>
    </div>);
  }
}

export default MessageBanner;