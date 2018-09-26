import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class CategoryCard extends React.PureComponent {

  static Background = ({children}) => <div
    className='c-catcard__background'>{children}</div>;

  static Title = ({children}) => <div className='c-catcard__content'>
    <h1>{children}</h1></div>;

  static defaultProps = {
    id: ''
  };
  static propTypes    = {
    id: PropTypes.string
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  onCardClick = () => {
      this.props.history.push('/search/'+this.props.id);
  };

  render() {
    let {children, staticContext, ...rest} = this.props;
    return (<div className='c-catcard' {...rest} onClick={this.onCardClick} >{children}</div>);
  }
}

export default withRouter(CategoryCard);