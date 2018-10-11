import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Button from "./Button";
import SVGIcon from "./SVGIcon";
import Tag from './Tag';
import Card from "./Card";

const AllegoLogo  = require('../../img/logo-allego.png');
const KalturaLogo = require('../../img/logo-kaltura.png');
const LyndaLogo   = require('../../img/logo-lynda.png');

class LearningCard extends React.PureComponent {

  static defaultProps = {
    type    : 'course',
    mobile  : false,
    card    : true,
    provider: 'lms'
  };
  // types: course (default), path
  static propTypes    = {
    type    : PropTypes.string,
    duration: PropTypes.string,
    mod     : PropTypes.string,
    mobile  : PropTypes.bool,
    card    : PropTypes.bool,
    tag     : PropTypes.string,
    ctaLabel: PropTypes.string,
    provider: PropTypes.string
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
    let {type, duration, mod, mobile, tag, ctaLabel, children, staticContext, provider, card, ...rest} = this.props;

    let cls        = card ? ['c-lrncard'] : ['c-lrncard--row'],
        cardFormat = card ? 'c-lrncard__contents' : 'c-lrncard__contents--row',
        typeLabel  = 'Course',
        cardIcon   = <SVGIcon name='book'/>,
        tagEl      = tag ? <Tag>{tag}</Tag> : null,
        ctaEl      = ctaLabel ? <Button>{ctaLabel}</Button> : null;

    if (type === 'path') {
      cls.push('c-lrncard--path');
      typeLabel = 'Learning Path';
      cardIcon  = <SVGIcon name='box'/>;
    } else {
      cls.push('c-lrncard--course');
      if (provider === 'allego') {
        typeLabel = 'Allego';
        cardIcon = <img className='c-lrncard--imgicon' src={AllegoLogo}
                        alt='Allego Logo'/>
        cls.push('c-lrncard--course--allego');
      } else if (provider === 'kaltura') {
        typeLabel = 'Kaltura';
        cardIcon = <img className='c-lrncard--imgicon' src={KalturaLogo}
                        alt='Kaltura Logo'/>
        cls.push('c-lrncard--course--kaltura');
      } else if (provider === 'lynda') {
        typeLabel = 'Lynda.com';
        cardIcon = <img className='c-lrncard--imgicon' src={LyndaLogo}
                        alt='Lynda.com Logo'/>
        cls.push('c-lrncard--course--lynda');
      }
    }

    return (
      <Card className={cls.join(' ')} onClick={this.onCardClick} {...rest}>
        <div className={cardFormat}>
          <div className='c-lrncard__icon'>{cardIcon}</div>
          <div className='c-lrncard__duration'><p>{duration}</p></div>
          <div className='c-lrncard__content'>
            <h2>{typeLabel}</h2>
            {children}
          </div>
          <div className='c-lrncard__cta'>
            {ctaLabel ? ctaEl : tagEl}
          </div>
          <div className='c-lrncard__subicon'>{mobile ?
            <SVGIcon name='mobile-friendly' className=''/> : null}</div>
        </div>
      </Card>
    );
  }
}

export default withRouter(LearningCard);