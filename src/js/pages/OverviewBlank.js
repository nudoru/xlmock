import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Hero from "../layout/Hero";
import Content from "../layout/Content";
import MessageBanner from "../components/MessageBanner";
import {BigTabs} from "../components/BigTabs";
import TestGridContent from "../test/TestGridContent";
import Button from "../components/Button";
import SVGIcon from "../components/SVGIcon";
import * as Lorem from '../utils/Lorem';
import ProgressBar from "../components/ProgressBar";
import MessageBannerGroup from "../components/MessageBannerGroup";
import Message from "../components/Message";

const UpnextItem = ({icon, title, metadata})=> <li>
  <div className='c-next-steps__icon'>{icon}</div>
  <div className='c-next-steps__details'>
    <span className='title'><Link to='courseplayer'>{title}</Link></span>
    <span className='metadata'>{metadata}</span>
  </div>
</li>;

class OverviewBlank extends React.Component {

  static defaultProps = {};
  static propTypes    = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  onResumePathClick = () => {
    this.props.history.push('/courseplayer');
  }

  onViewPathClick = () => {
    this.props.history.push('/path');
  }

  render() {
    return (
      <React.Fragment>
        <Hero>
          <Hero.Content>
            <BigTabs negative>
              <BigTabs.Tab active><Link to='/overviewblank'>Overview</Link></BigTabs.Tab>
              <BigTabs.Tab><Link to='/discoverblank'>Discover</Link></BigTabs.Tab>
              <BigTabs.Tab><Link to='/team'>Team</Link></BigTabs.Tab>
            </BigTabs>
            <h4 className='u-padding-top'>Resume your last learning path</h4>
            <div className='l-site-hero__display'>
              <div className='c-current-path'>
                <h1>Welcome to Red Hat Learning</h1>
                <p>This learning path will introduce you to Red Het Learning, how to use the site and how to get the most out of it. Click <b>View Path</b> to get started!</p>
                <div className='c-path-progress'>
                  <ProgressBar percent='0' status=' - 10 Activities Left'/>
                </div>
              </div>
              <div className='c-next-steps'>
                <h1>Up Next:</h1>
                <ul>
                  <UpnextItem icon={<SVGIcon name='package'/>} title='What is Red Hat Learning?' metadata='Video - 5 min'/>
                  <UpnextItem icon={<SVGIcon name='package'/>} title='How Red Hat Learning boosts your learning journey' metadata='Reading - 2 min'/>
                  <UpnextItem icon={<SVGIcon name='package'/>} title='Getting around the site' metadata='Video - 5 min'/>
                </ul>
              </div>
            </div>
            <div className='c-path-metadata'>
              <Button onClick={this.onResumePathClick} negative primary
                      className='u-margin-right'>Resume Path</Button>
              <Button onClick={this.onViewPathClick} negative>View Path</Button>
            </div>
          </Hero.Content>
        </Hero>
        <Content>
          <TestGridContent mode='list' title='Learning Paths in progress'
                           numPaths={0} numCourses={0}
                           allowViewChange
                           allowSort/>
          <Message className='u-margin-bottom-triple'>You don't have any enrolled learning paths. Visit the <a href=''>Discover</a> or <a href=''>Catalog</a> to find content that interests you.</Message>
          <TestGridContent mode='list' title='Courses in progress'
                           numPaths={0} numCourses={0}
                           allowViewChange
                           allowSort/>
          <Message className='u-margin-bottom-triple'>You don't have any enrolled courses. Visit the <a href=''>Discover</a> or <a href=''>Catalog</a> to find content that interests you.</Message>
          <TestGridContent mode='list' title='Upcoming classes'
                           numPaths={0} numCourses={0}
                           allowViewChange
                           allowSort/>
          <Message className='u-margin-bottom-triple'>You don't have any upcoming classes.</Message>
        </Content>
      </React.Fragment>
    );
  }
}

export default withRouter(OverviewBlank);