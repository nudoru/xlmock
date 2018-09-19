import React from 'react';

class Hero extends React.PureComponent {

  static Content = ({children}) => <div
    className='c-site-hero__content'>{children}</div>;

  static OuterContent = ({children}) => <div
    className='c-site-hero__outercontent'>{children}</div>;

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
      <div className='l-site-hero'>
        <div className='c-site-hero__image'/>
        {this.props.children}
      </div>
    );
  }
}

export default Hero;