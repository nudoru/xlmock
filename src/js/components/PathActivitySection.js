import React from 'react';
import PropTypes from 'prop-types';

class PathActivitySection extends React.PureComponent {

  static Title = ({children, ...rest}) => <h1 className='l-path-detail__activities__section__title' {...rest}>{children}</h1>;

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let {children, ...rest} = this.props;

    return (<div className='l-path-detail__activities__section'>{children}</div>);
  }
}

export default PathActivitySection;