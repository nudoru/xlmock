import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import SVGIcon from "./SVGIcon";

/*
Todo
[ ] Support selected on an entry as the currently selected item
 */

const DropDownContext = React.createContext({
  select: () => {
  }
});

class DropDown extends React.PureComponent {

  static Entry = ({children}) => (
    <DropDownContext.Consumer>
      {contextValue => <div className='c-dropdown__entry'
                            onClick={contextValue.select}>{children}</div>}
    </DropDownContext.Consumer>
  );

  static defaultProps = {
    open              : false,
    setSelectedAsTitle: true
  };
  static propTypes    = {
    open              : PropTypes.bool,
    title             : PropTypes.string,
    setSelectedAsTitle: PropTypes.bool,
    negative          : PropTypes.bool
  };

  state = {
    isOpen: this.props.open,
    label : this.props.title
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  toggleMenu = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  onSelectItem = (e) => {
    if (this.props.setSelectedAsTitle) {
      this.setState({label: e.target.innerText});
    }
    this.toggleMenu();
  };

  render() {
    const {className = null, children, negative, open, setSelectedAsTitle, ...rest} = this.props;

    let cls = ['c-dropdown'];
    cls.push(className);

    let contentsCls = ['c-dropdown__contents'];

    if (!this.state.isOpen) {
      contentsCls.push('c-dropdown__contents--closed');
    }


    return (
      <DropDownContext.Provider value={{select: this.onSelectItem}}>
        <div className={cls.join(' ')} {...rest}>
          <Button onClick={this.toggleMenu}>{this.state.label}
            {this.state.isOpen ? <SVGIcon name='chevron-up'
                                          className='u-icon-button--right'/> :
              <SVGIcon name='chevron-down'
                       className='u-icon-button--right'/>}</Button>
          <div className={contentsCls.join(' ')}>{children}</div>
        </div>
      </DropDownContext.Provider>);
  }
}

export default DropDown;