import React from 'react';
import PropTypes from 'prop-types';

class SiteContainer extends React.PureComponent {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let {children} = this.props;

    return (<div className='l-site-container'>
      {children}
      </div>);
  }
}

export default SiteContainer;