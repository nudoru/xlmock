import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from "./SVGIcon";

class Tag extends React.Component {

  static defaultProps = {};
  static propTypes = {
    negative: PropTypes.bool
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let {className=null, children, negative, ...rest} = this.props;

    let cls = ['c-tag'];

    if(negative) {
      cls.push('c-tag--negative');
    }

    cls.push(className);

    return <div className={cls.join(' ')} {...rest}><SVGIcon name='hash' width='12' height='12'/>{children}</div>;
  }
}

export default Tag;