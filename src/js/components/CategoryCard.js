import React from 'react';
import {withRouter} from 'react-router-dom';

class CategoryCard extends React.Component {

  static Background = ({children}) => <div
    className='c-catcard__background'>{children}</div>;

  static Title = ({children}) => <div className='c-catcard__content'>
    <h1>{children}</h1></div>;

  static defaultProps = {};
  static propTypes    = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  onCardClick = () => {
      this.props.history.push('/catalogcategory');
  };

  render() {
    let {children, staticContext, ...rest} = this.props;
    return (<div className='c-catcard' {...rest} onClick={this.onCardClick} >{children}</div>);
  }
}

export default withRouter(CategoryCard);