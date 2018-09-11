import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Button from "./Button";
import SVGIcon from "./SVGIcon";
import Tag from './Tag';

class HeroCard extends React.Component {

  static defaultProps = {
    type  : 'course',
    mobile: false,
  };
  
  // types: course (default), path
  static propTypes    = {
    type    : PropTypes.string,
    duration: PropTypes.string,
    mod     : PropTypes.string,
    mobile  : PropTypes.bool,
    tag     : PropTypes.string,
    ctaLabel: PropTypes.string
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  //https://tylermcginnis.com/react-router-programmatically-navigate/
  onCardClick = () => {
    if (this.props.type === 'path') {
      this.props.history.push('/path');
    } else {
      this.props.history.push('/course');
    }
  };

  render() {
    // Pulling out staticContext https://github.com/ReactTraining/react-router/issues/4683
    // because it's a composed component w/ React Router
    let {type, duration, mod, mobile, tag, ctaLabel, children, staticContext, card, ...rest} = this.props;

    let cls        = ['c-herocard'],
        typeLabel  = 'Course',
        cardIcon   = <SVGIcon name='book'/>,
        tagEl      = tag ? <Tag>{tag}</Tag> : null,
        ctaEl      = ctaLabel ? <Button>{ctaLabel}</Button> : null;

    if (type === 'path') {
      cls.push('c-herocard--path');
      typeLabel = 'Learning Path';
      cardIcon  = <SVGIcon name='box'/>;
    } else {
      cls.push('c-herocard--course');
    }
        
    return (
      <div className={cls.join(' ')} onClick={this.onCardClick} {...rest}>
        <div className='c-herocard__contents'>
          <div className='c-herocard__icon'>{cardIcon}</div>
          <div className='c-herocard__duration'><p>{duration}</p></div>
          <div className='c-herocard__content'>
            <h2>{typeLabel}</h2>
            {children}
          </div>
          <div className='c-herocard__cta'>
            {ctaLabel ? ctaEl : tagEl}
          </div>
          <div className='c-herocard__subicon'>{mobile ?
            <SVGIcon name='mobile-friendly' className=''/> : null}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(HeroCard);