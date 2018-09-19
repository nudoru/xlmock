import React from 'react';
import PropTypes from 'prop-types';
import Coin from "./Coin";

class PersonaMed extends React.PureComponent {

  static Image = ({children}) => <Coin className='c-persona--med__photo' image={children} size='lg'/>;
  static Details = ({children}) => <div className='c-persona--med__details'>{children}</div>;

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='c-persona--med'>{this.props.children}</div>);
  }
}

export default PersonaMed;