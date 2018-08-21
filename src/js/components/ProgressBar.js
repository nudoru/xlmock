import React from 'react';
import PropTypes from 'prop-types';

// TODO
// set %
// set status note
// show status?
// positive variant

class ProgressBar extends React.Component {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div>
      <div className='c-bar--negative'>
        <div className='c-bar__fill--negative'></div>
      </div>
      <div className='status'>
        <p><em>35% Complete</em> - 36 hours left</p>
      </div>
    </div>);
  }
}

export default ProgressBar;