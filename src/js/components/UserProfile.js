import React from 'react';
import PropTypes from 'prop-types';

class UserProfile extends React.Component {

  static Image = ({children}) => <div className='c-userprofile__photo'>{children}</div>;
  static Details = ({children}) => <div className='c-userprofile__details'>{children}</div>;

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='c-userprofile'>{this.props.children}</div>);
  }
}

export default UserProfile;