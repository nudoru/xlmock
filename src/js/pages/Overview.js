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

class Overview extends React.Component {

  static defaultProps = {};
  static propTypes    = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <Hero>
          <MessageBanner>Important message!</MessageBanner>
          <BigTabs>
            <BigTabs.Tab active><Link to='/'>Overview</Link></BigTabs.Tab>
            <BigTabs.Tab><Link to='/discover'>Discover</Link></BigTabs.Tab>
            <BigTabs.Tab><Link to='/team'>Team</Link></BigTabs.Tab>
          </BigTabs>
          <HeroPathProgress/>
        </Hero>
        <Content>
            <TestGridContent title='Your Stuff'/>
        </Content>
      </React.Fragment>
    );
  }
}

export default Overview;