import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from "./ProgressBar";


// TODO
// break up in to smaller components?

const UpnextItem = ({icon, title, metadata})=> <li>
  <div className='c-next-steps__icon'>{icon}</div>
  <div className='c-next-steps__details'>
    <span className='title'>{title}</span>
    <span className='metadata'>{metadata}</span>
  </div>
</li>;

// TODO
// break up in to smaller components

class HeroPathProgress extends React.Component {

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
        <h1>Be an Ansible Engineer</h1>
        <p>Integer sodales lorem ac lectus efficitur, eu tincidunt dolor auctor. Nulla ut felis vitae mauris lobortis euismod quis sodales enim. Maecenas odio massa, ultricies et porttitor eu, maximus eget purus. In hac habitasse platea dictumst. Etiam hendrerit gravida efficitur.</p>
        <div className='c-path-progress'>
          <ProgressBar/>
        </div>
      </div>
      <div className='c-next-steps'>
        <h1>Up Next:</h1>
        <ul>
          <UpnextItem icon='I' title='Control task and play behavior' metadata='Reading - 10 min'/>
          <UpnextItem icon='I' title='Code driven deployments and ...' metadata='Reading - 10 min'/>
          <UpnextItem icon='I' title='Infrastructure management' metadata='Reading - 10 min'/>
        </ul>
      </div>
    </div>);
  }
}



export default HeroPathProgress;