import React from 'react';
import PropTypes from 'prop-types';

class PathActivitySubsection extends React.Component {

  static Title = ({children, ...rest}) => <h2 className='l-path-detail__activities__subsection__title' {...rest}>{children}</h2>;
  static Description = ({children, ...rest}) => <div className='l-path-detail__activities__subsection__description' {...rest}>{children}</div>;

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let {children, ...rest} = this.props;

    return (<div className='l-path-detail__activities__subsection' {...rest}>{children}</div>);
  }
}

export default PathActivitySubsection;