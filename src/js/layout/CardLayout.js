import React from 'react';
import PropTypes from 'prop-types';
import Button from "../components/Button";
import SVGIcon from "../components/SVGIcon";
import ButtonBar from "../components/ButtonBar";

class CardLayout extends React.Component {

  static defaultProps = {};
  static propTypes    = {
    title: PropTypes.string
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    let {title, ctaLabel, children} = this.props;

    const cta = ctaLabel ? <Button>{ctaLabel}</Button> : null;

    return (
      <div className='l-card-grid'>
        <div className='c-card-grid__title'>
          <h1>{title}</h1>
        </div>
        <div className='c-card-grid__filters'>
          <Button>Recent <SVGIcon name='chevron-down' className='u-icon-button--right'/></Button>
          <ButtonBar>
            <ButtonBar.Icon><a href='#'><SVGIcon name='grid'/></a></ButtonBar.Icon>
            <ButtonBar.Icon><a href='#'><SVGIcon name='list'/></a></ButtonBar.Icon>
          </ButtonBar>
        </div>
        <div className='c-card-grid__contents'>
          {
            children.map((child, i) => <div className='c-card-grid__cell' key={i}>{child}</div> )
          }
        </div>
        <div className='l-card-grid__cta'>{cta}</div>
      </div>
    );
  }
}

export default CardLayout;