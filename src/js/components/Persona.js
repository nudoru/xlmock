import React from 'react';
import PropTypes from 'prop-types';
import Coin from './Coin';

const SIZE_MAP = {
  sm: '',
  m : '--med',
  lg: '--lg',
};

const PersonaContext = React.createContext({
  size: 'sm',
  stacked: false
});

class Persona extends React.PureComponent {

  // static Image   = ({children}) => <Coin className='c-persona__photo' image={children} size='sm'/>;
  static Image   = ({children}) => (
    <PersonaContext.Consumer>{contextValue => <Coin className='c-persona__photo'
                                                    image={children}
                                                    size={contextValue.size}/>}</PersonaContext.Consumer>);
  static Details = ({children}) => <div
    className='c-persona__details'>{children}</div>;

  static defaultProps = {
    size   : 'sm',
    stacked: false
  };
  static propTypes    = {
    size   : PropTypes.string,
    stacked: PropTypes.bool
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const {className = null, children, size, stacked, ...rest} = this.props;

    let cls = [stacked ? 'c-persona__stacked' : 'c-persona'];

    cls[0] = cls[0] + SIZE_MAP[size];

    cls.push(className);

    return (
      <PersonaContext.Provider value={{size: size, stacked: stacked}}>
        <div className={cls.join(' ')} {...rest}>{children}</div>
      </PersonaContext.Provider>
    );
  }
}

export default Persona;