import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";
import SVGIcon from "./SVGIcon";

class LearningCard extends React.Component {

  static defaultProps = {};
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

  render() {
    let {type, duration, mod, mobile, tag, ctaLabel, children, ...rest} = this.props;
    let cls                                                             = ['c-card'];
    let typeLabel                                                       = 'Course';

    if (type === 'path') {
      cls.push('c-card--path');
      typeLabel = 'Learning Path';
    }

    return (<div className={cls.join(' ')} {...rest}>
      <div className='c-card__contents'>
        <div className='c-card__icon'><SVGIcon name='box'/></div>
        <div className='c-card__duration'>{duration}</div>
        <div className='c-card__content'>
          <h2>{typeLabel}</h2>
          {children}
        </div>
        <div className='c-card__cta'>
          <Button primary>Resume</Button>
        </div>
        <div className='c-card__subicon'>{mobile ? <SVGIcon name='mobile'/> : null}</div>

      </div>
    </div>);
  }
}

export default LearningCard;