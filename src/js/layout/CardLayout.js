import React from 'react';
import PropTypes from 'prop-types';

class CardLayout extends React.PureComponent {

  static Title = ({children}) => <div className='c-lrncard-grid__title'><h1>{children}</h1></div>;

  static Controls = ({children}) => <div className='c-lrncard-grid__controls'>{children}</div>;

  static Status = ({children}) => <div className='l-card-grid__cta'>{children}</div>;

  static GridContent = ({children}) => {
    return (
      <div className='c-lrncard-grid__gridcontents'>
        {
          children.map((child, i) => <div className='c-lrncard-grid__cell' key={i}>{child}</div> )
        }
      </div>
    );
  };

  static ListContent = ({children}) => {
    return (
      <div className='c-lrncard-grid__listcontents'>
        {
          children.map((child, i) => <div className='c-lrncard-grid__row' key={i}>{child}</div> )
        }
      </div>
    );
  };

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