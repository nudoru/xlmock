import React from 'react';
import PropTypes from 'prop-types';

class CardLayout extends React.Component {

  static Title = ({children}) => <div className='c-card-grid__title'><h1>{children}</h1></div>;

  static Controls = ({children}) => <div className='c-card-grid__filters'>{children}</div>;

  static Status = ({children}) => <div className='l-card-grid__cta'>{children}</div>;

  static Content = ({children}) => {
    return (
      <div className='c-card-grid__contents'>
        {
          children.map((child, i) => <div className='c-card-grid__cell' key={i}>{child}</div> )
        }
      </div>
    );
  }

  static defaultProps = {};
  static propTypes    = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return  <div className='l-card-grid'>{this.props.children}</div>
  }
}

export default CardLayout;