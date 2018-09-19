import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from "./SVGIcon";

class CheckBox extends React.PureComponent {

  static defaultProps = {};
  static propTypes = {
    selected: PropTypes.bool
  };

  state = {
    isSelected: this.props.selected
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  toggleSelect = () => {
    this.setState({isSelected: !this.state.isSelected});
  }

  render() {
    let {children, ...rest} = this.props;

    return (<div className='c-checkbox' {...rest} onClick={this.toggleSelect}>
      <div className='c-checkbox__box'>
        {this.state.isSelected ? <SVGIcon name='check-square'/> : <SVGIcon name='square'/>}
      </div>
      <div className='c-checkbox__label'>{children}</div>
    </div>);
  }
}

export default CheckBox;