import React from 'react';
import PropTypes from 'prop-types';

class Hero extends React.Component {

  static defaultProps = {};
  static propTypes    = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='l-site-hero'>
        <div className='c-site-hero__image'/>
        <div className='c-site-hero__content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Hero;