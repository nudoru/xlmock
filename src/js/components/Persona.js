import React from 'react';
import PropTypes from 'prop-types';
import Coin from './Coin';

class Persona extends React.Component {

  static Image = ({children}) => <Coin className='c-persona__photo' image={children} size='sm'/>;
  static Details = ({children}) => <div className='c-persona__details'>{children}</div>;

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='c-persona'>{this.props.children}</div>);
  }
}

export default Persona;