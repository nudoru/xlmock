import React from 'react';
import {Link} from 'react-router-dom';
import Hero from "../layout/Hero";
import Content from "../layout/Content";
import MessageBanner from "../components/MessageBanner";
import HeroPathProgress from "../components/HeroPathProgress";
import CardLayout from "../layout/CardLayout";
import LearningCard from '../components/LearningCard';
import {BigTabs} from "../components/BigTabs";
import TestGridContent from "../test/TestGridContent";
import Tag from "../components/Tag";
import SVGIcon from "../components/SVGIcon";
import Button from "../components/Button";
import {withRouter} from 'react-router-dom';

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
          <MessageBanner>Important message!</MessageBanner>
          <BigTabs negative>
            <BigTabs.Tab active><Link to='/'>Overview</Link></BigTabs.Tab>
            <BigTabs.Tab><Link to='/discover'>Discover</Link></BigTabs.Tab>
            <BigTabs.Tab><Link to='/team'>Team</Link></BigTabs.Tab>
          </BigTabs>
          <HeroPathProgress/>
          <div className='c-path-metadata'>
            <Button onClick={this.onResumePathClick} negative primary className='u-margin-right'>Resume Path</Button>
            <Button onClick={this.onViewPathClick} negative>View Path</Button>
          </div>
        </Hero>
        <Content>
            <TestGridContent mode='list' title='Learning Paths in progress'badgeCount={3} numPaths={3} numCourses={0}/>
            <TestGridContent mode='list' title='Courses in progress' badgeCount={3} numPaths={0} numCourses={3}/>
        </Content>
      </React.Fragment>
    );
  }
}

export default withRouter(Overview);