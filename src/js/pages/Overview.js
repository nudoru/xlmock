import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Hero from "../layout/Hero";
import Content from "../layout/Content";
import MessageBanner from "../components/MessageBanner";
import HeroPathProgress from "../components/HeroPathProgress";
import {BigTabs} from "../components/BigTabs";
import TestGridContent from "../test/TestGridContent";
import Button from "../components/Button";
import SVGIcon from "../components/SVGIcon";
import * as Lorem from '../utils/Lorem';
import MessageBannerGroup from "../components/MessageBannerGroup";

class Overview extends React.Component {

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
            <MessageBannerGroup>
              <MessageBanner negative>
                <MessageBanner.BoxedIcon>
                  <SVGIcon name='flag'/>
                </MessageBanner.BoxedIcon>
                <MessageBanner.Message>
                  <h1>Welcome to Red Hat Learning!</h1>
                  <p>First time here? Let us help you understand what you can do on this site.</p>
                </MessageBanner.Message>
                <MessageBanner.CTA>
                  <Button negative>No thanks</Button>
                  <Button primary negative>View Getting Started</Button>
                </MessageBanner.CTA>
              </MessageBanner>
            </MessageBannerGroup>
            <BigTabs negative>
              <BigTabs.Tab active><Link to='/'>Overview</Link></BigTabs.Tab>
              <BigTabs.Tab><Link to='/discover'>Discover</Link></BigTabs.Tab>
              <BigTabs.Tab><Link to='/team'>Team</Link></BigTabs.Tab>
            </BigTabs>
            <h4 className='u-padding-top'>Resume your last learning path</h4>
            <HeroPathProgress/>
            <div className='c-path-metadata'>
              <Button onClick={this.onResumePathClick} negative primary
                      className='u-margin-right'>Resume Path</Button>
              <Button onClick={this.onViewPathClick} negative>View Path</Button>
            </div>
          </Hero.Content>
        </Hero>
        <Content>
          <TestGridContent mode='list' title='Learning Paths in progress'
                           badgeCount={3} numPaths={3} numCourses={0}
                           status={<Button>View More</Button>} allowViewChange
                           allowSort/>
          <TestGridContent mode='list' title='Courses in progress'
                           badgeCount={3} numPaths={0} numCourses={3}
                           status={<Button>View More</Button>} allowViewChange
                           allowSort/>
        </Content>
      </React.Fragment>
    );
  }
}

export default withRouter(Overview);