import React from 'react';
import ReactDom from 'react-dom';
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

  static Heading = ({children}) => <div
    className='c-dropdown__heading'>{children}</div>;

  static Entry = ({
                    children, onClick = () => {
    }, ...rest
                  }) => (
    <DropDownContext.Consumer>
      {contextValue => <div className='c-dropdown__entry'
                            onClick={(e) => {
                              contextValue.select(e);
                              onClick(e);
                            }}
                            {...rest}
      >{children}</div>}
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
    this.buttonEl = React.createRef();
  }

  componentDidMount() {
  }

  toggleMenu = _ => {
    this.setState({isOpen: !this.state.isOpen});
  };

  onButtonClick = (e) => {
    if(e.target === ReactDom.findDOMNode(this.buttonEl.current)) {
      console.log('click on de buttton')
    } else {
      console.log('not on de button')
    }
    this.toggleMenu();
  };

  onSelectItem = (e) => {
    if (this.props.setSelectedAsTitle) {
      this.setState({label: e.target.innerText});
    }
    this.toggleMenu();
  };

  onChevronClick = (e) => {
    console.log('chevron click')
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
          <Button onClick={this.onButtonClick} ref = {this.buttonEl}>{this.state.label}
            <span className='c-dropdown__chevron' onClick={this.onChevronClick}>
            {this.state.isOpen ? <SVGIcon name='chevron-up'/> :
              <SVGIcon name='chevron-down'/>}
           </span>
          </Button>

          <div className={contentsCls.join(' ')}>{children}</div>
        </div>
      </DropDownContext.Provider>);
  }
}

export default DropDown;