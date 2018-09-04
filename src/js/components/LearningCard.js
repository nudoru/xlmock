import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Button from "./Button";
import SVGIcon from "./SVGIcon";
import Tag from './Tag';

class LearningCard extends React.Component {

  static defaultProps = {
    type: 'course',
    mobile: false
  };
  // types: course (default), path
  static propTypes    = {
    type    : PropTypes.string,
    duration: PropTypes.string,
    mod     : PropTypes.string,
    mobile  : PropTypes.bool,
    asCard  : PropTypes.bool,
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
  }

  render() {
    // Pulling out staticContext https://github.com/ReactTraining/react-router/issues/4683
    let {type, duration, mod, mobile, tag, ctaLabel, children, staticContext, ...rest} = this.props;

    let cls       = ['c-card'],
        typeLabel = 'Course',
        cardIcon  = <SVGIcon name='book'/>,
        tagEl = tag ? <Tag>{tag}</Tag> : null,
        ctaEl = ctaLabel ? <Button>{ctaLabel}</Button> : null;

    if (type === 'path') {
      cls.push('c-card--path');
      typeLabel = 'Learning Path';
      cardIcon  = <SVGIcon name='box'/>;
    }

    return (<div className={cls.join(' ')} onClick={this.onCardClick} {...rest}>
      <div className='c-card__contents'>
        <div className='c-card__icon'>{cardIcon}</div>
        <div className='c-card__duration'>{duration}</div>
        <div className='c-card__content'>
          <h2>{typeLabel}</h2>
          {children}
        </div>
        <div className='c-card__cta'>
          {ctaLabel ? ctaEl : tagEl}
        </div>
        <div className='c-card__subicon'>{mobile ?
          <SVGIcon name='mobile-friendly' className=''/> : null}</div>
      </div>
    </div>);
  }
}

export default withRouter(LearningCard);