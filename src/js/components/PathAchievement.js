import React from 'react';

class PathAchievement extends React.PureComponent {

  static Title = ({children}) => <h1
    className='l-path-detail__achievement__title'>{children}</h1>
  static Icon  = ({children}) => <div
    className='l-path-detail__achievement__icon'>{children}</div>

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
      <div className='l-path-detail__achievement'>{this.props.children}</div>);
  }
}

export default PathAchievement;