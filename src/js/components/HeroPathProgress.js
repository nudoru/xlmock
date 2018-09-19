import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from "./ProgressBar";
import SVGIcon from "./SVGIcon";
import * as Lorem from '../utils/Lorem';
import {Link} from 'react-router-dom'

// TODO
// break up in to smaller components?

const UpnextItem = ({icon, title, metadata})=> <li>
  <div className='c-next-steps__icon'>{icon}</div>
  <div className='c-next-steps__details'>
    <span className='title'><Link to='courseplayer'>{title}</Link></span>
    <span className='metadata'>{metadata}</span>
  </div>
</li>;

// TODO
// break up in to smaller components

class HeroPathProgress extends React.PureComponent {

  static defaultProps = {};
  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className='l-site-hero__display'>
      <div className='c-current-path'>
        <h1>{Lorem.title(5,10)}</h1>
        <p>{Lorem.sentence(20,40)}</p>
        <div className='c-path-progress'>
          <ProgressBar percent='33' status=' - 20 Activities Left'/>
        </div>
      </div>
      <div className='c-next-steps'>
        <h1>Up Next:</h1>
        <ul>
          <UpnextItem icon={<SVGIcon name='package'/>} title={Lorem.title(5,10)} metadata='Reading - 10 min'/>
          <UpnextItem icon={<SVGIcon name='package'/>} title={Lorem.title(5,10)} metadata='Reading - 10 min'/>
          <UpnextItem icon={<SVGIcon name='package'/>} title={Lorem.title(5,10)} metadata='Reading - 10 min'/>
        </ul>
      </div>
    </div>);
  }
}



export default HeroPathProgress;