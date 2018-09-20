import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';

const SIZE_MAP = {
  xs: '1.25rem',
  sm: '2.5rem',
  m: '5rem',
  lg: '12.5rem'
};

class Coin extends React.PureComponent {

  static defaultProps = {
    size: 'sm',
    image: null
  };

  static propTypes    = {
    size: PropTypes.string
    // image : PropTypes.func
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  getSizeCSS = (size) => css`
    width: ${size};
    height: ${size};
    line-height: ${size};
    img {
      width: ${size};
      height: ${size};
    }
  `;

  render() {
    let {image, size, className = null, ...rest} = this.props;

    let innerContent = image ? image : 'Photo',
        cls          = ['c-coin'];

    cls.push(this.getSizeCSS(SIZE_MAP[size]));
    cls.push(className);

    return (<div className={cls.join(' ')} {...rest}>{innerContent}</div>);
  }
}

export default Coin;