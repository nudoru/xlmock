import React from 'react';
import PropTypes from 'prop-types';

class HeroCarousel extends React.PureComponent {

  static Content = ({children}) => <div className='l-herocarousel__content'>{children}</div>;
  static Indicators = ({children}) => <div className='l-herocarousel__indicators'>{children}</div>;

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='l-herocarousel'>{this.props.children}</div>);
  }
}

export default HeroCarousel;