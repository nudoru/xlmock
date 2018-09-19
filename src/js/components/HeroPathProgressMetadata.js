import React from 'react';
import PropTypes from 'prop-types';
import Tag from "./Tag";
import SVGIcon from "./SVGIcon";

class HeroPathProgressMetadata extends React.PureComponent {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='c-path-metadata'>
      <div className='c-path-metadata__tags'><Tag negative>Infrastructure</Tag></div>
      <div className='c-path-metadata__duration'><p><em>Duration</em>3 weeks</p></div>
      <div className='c-path-metadata__activities'><p><em>Activities</em>126 activities</p></div>
      <div className='c-path-metadata__mobile'><SVGIcon large name='mobile-friendly'/></div>
    </div>);
  }
}

export default HeroPathProgressMetadata;