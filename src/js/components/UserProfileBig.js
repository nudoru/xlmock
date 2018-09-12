import React from 'react';
import PropTypes from 'prop-types';

class UserProfileBig extends React.Component {

  static Image = ({children}) => <div className='c-userprofile--big__photo'>{children}</div>;
  static Details = ({children}) => <div className='c-userprofile--big__details'>{children}</div>;

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='c-userprofile--big'>{this.props.children}</div>);
  }
}

export default UserProfileBig;