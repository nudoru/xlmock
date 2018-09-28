import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Button from './Button';
import SVGIcon from "./SVGIcon";

/*
Todo
- manage internal state - selected index
- allow control of selected
- layout may need to be refactored away from a button to 2 divs, one for label and one for chevron?
 */

const DropDownContext = React.createContext({
  select: () => {
  }
});

class DropDown extends React.PureComponent {

  static Heading = ({children}) => <div
    className='c-dropdown__heading'>{children}</div>;

  static Entry = ({
                    children, selected = false,
                    onClick = () => {
                    },
                    ...rest
                  }) => (
    <DropDownContext.Consumer>
      {contextValue => <div className='c-dropdown__entry'
                            data-selected={selected}
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

  static propTypes = {
    open              : PropTypes.bool,
    title             : PropTypes.string,
    setSelectedAsTitle: PropTypes.bool,
    // TODO negative          : PropTypes.bool,
    onLabelClick      : PropTypes.func
  };

  state = {
    isOpen        : this.props.open,
    label         : this.props.title,
    hasAltFunction: this.props.onLabelClick != null
  };

  constructor(props) {
    super(props);
    this.buttonEl   = React.createRef();
    this.contentsEl = React.createRef();
  }

  toggleMenu = _ => {
    this.setState({isOpen: !this.state.isOpen});
  };

  onButtonClick = (e) => {
    if (e.target === ReactDom.findDOMNode(this.buttonEl.current)) {
      if (this.state.hasAltFunction) {
        this.props.onLabelClick(e);
        return false;
      }
    }
    this.toggleMenu();
  };

  onEntryClick = (e) => {
    this.selectItem(e.target);
    this.toggleMenu();
  };

  selectItem = (elNode) => {
    if (this.props.setSelectedAsTitle) {
      this.setState({label: elNode.innerText});
    }
    // TODO Update some other state w/ the index of this item here
    // TODO an onChange callback
  };

  componentDidMount() {
    ReactDom.findDOMNode(this.contentsEl.current).childNodes.forEach(node => {
      if (node.getAttribute('data-selected') === 'true') {
        this.selectItem(node);
      }
    });
  }

  render() {
    const {className = null, children, negative, open, setSelectedAsTitle, onLabelClick, ...rest} = this.props;

    let cls = ['c-dropdown'];
    cls.push(className);

    let contentsCls = ['c-dropdown__contents'];

    if (!this.state.isOpen) {
      contentsCls.push('c-dropdown__contents--closed');
    }


    return (
      <DropDownContext.Provider value={{select: this.onEntryClick}}>
        <div className={cls.join(' ')} {...rest}>
          <Button onClick={this.onButtonClick}
                  ref={this.buttonEl}>{this.state.label}
            <span className='c-dropdown__chevron'>
            {this.state.isOpen ? <SVGIcon name='chevron-up'/> :
              <SVGIcon name='chevron-down'/>}
           </span>
          </Button>

          <div ref={this.contentsEl}
               className={contentsCls.join(' ')}>{children}</div>
        </div>
      </DropDownContext.Provider>);
  }
}

export default DropDown;