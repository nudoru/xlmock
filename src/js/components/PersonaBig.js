import React from 'react';
import PropTypes from 'prop-types';

class PersonaBig extends React.Component {

  static Image = ({children}) => <div className='c-persona--big__photo'>{children}</div>;
  static Details = ({children}) => <div className='c-persona--big__details'>{children}</div>;

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='c-persona--big'>{this.props.children}</div>);
  }
}

export default PersonaBig;