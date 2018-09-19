import React from 'react';
import PropTypes from 'prop-types';
import Coin from "./Coin";

class PersonaBig extends React.PureComponent {

  static Image = ({children}) => <Coin className='c-persona--big__photo' image={children} size='xl'/>;
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