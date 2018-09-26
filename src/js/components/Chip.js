import React from 'react';
import SVGIcon from "./SVGIcon";
import Label from "./Label";

class Chip extends React.PureComponent {

  static defaultProps = {};
  static propTypes    = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const {className = null, children, ...rest} = this.props;

    let cls = [''];
    cls.push(className);

    return (
      <Label className={cls.join(' ')} {...rest}>{children}<SVGIcon name='x'
                                                                    width='14'
                                                                    height='14'
                                                                    className='u-padding-left'/></Label>);
  }
}

export default Chip;