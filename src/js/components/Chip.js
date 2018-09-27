import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from "./SVGIcon";
import Label from "./Label";

class Chip extends React.PureComponent {

  static defaultProps = {
    onRemove: () => {}
  };
  static propTypes    = {
    onRemove: PropTypes.func
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  onRemoveClick = (e) => {
    console.log('remove a chip');
    this.props.onRemove(e);
  };

  render() {
    const {className = null, children, onRemove, ...rest} = this.props;

    let cls = ['c-chip'];
    cls.push(className);

    return (
      <span className={cls.join(' ')} {...rest}>{children}<SVGIcon name='x'
                                                                    width='14'
                                                                    height='14'
                                                                    onClick = {this.onRemoveClick}
                                                                    className='u-padding-left'/></span>);
  }
}

export default Chip;