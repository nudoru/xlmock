import React from 'react';
import PropTypes from 'prop-types';

// TODO
// set %
// set status note
// show status?
// positive variant

class ProgressBar extends React.PureComponent {

  static defaultProps = {};
  static propTypes = {
    percent: PropTypes.string,
    status: PropTypes.string
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let {percent, status} = this.props;

    return (<div>
      <div className='c-bar--negative'>
        <div className='c-bar__fill--negative' style={{width: percent+'%'}}></div>
      </div>
      <div className='c-bar__status--negative'>
        <p><em>{percent}% Complete</em>{status}</p>
      </div>
    </div>);
  }
}

export default ProgressBar;