import React from 'react';
import {Link} from 'react-router-dom';
import Hero from "../layout/Hero";
import Content from "../layout/Content";
import MessageBanner from "../components/MessageBanner";
import HeroPathProgress from "../components/HeroPathProgress";
import CardLayout from "../layout/CardLayout";
import LearningCard from '../components/LearningCard';
import {BigTabs} from "../components/BigTabs";

class Dashboard extends React.Component {

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
          <CardLayout title='Layout title' ctaLabel='View More'>
            <LearningCard type='course' duration='42 minutes' mobile>
              <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
                enim</h1>
              <p>Aliquam vulputate vestibulum eleifend.</p>
            </LearningCard>
            <LearningCard type='course' duration='42 minutes' mobile>
              <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
                enim</h1>
              <p>Aliquam vulputate vestibulum eleifend.</p>
            </LearningCard>
            <LearningCard type='course' duration='42 minutes' mobile>
              <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
                enim</h1>
              <p>Aliquam vulputate vestibulum eleifend.</p>
            </LearningCard>
            <LearningCard type='course' duration='42 minutes' mobile>
              <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
                enim</h1>
              <p>Aliquam vulputate vestibulum eleifend.</p>
            </LearningCard>
            <LearningCard type='path' duration='42 minutes' mobile>
              <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
                enim</h1>
              <p>Aliquam vulputate vestibulum eleifend.</p>
            </LearningCard>
            <LearningCard type='path' duration='42 minutes' mobile>
              <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
                enim</h1>
              <p>Aliquam vulputate vestibulum eleifend.</p>
            </LearningCard>
            <LearningCard type='path' duration='42 minutes' mobile>
              <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales
                enim</h1>
              <p>Aliquam vulputate vestibulum eleifend.</p>
            </LearningCard>
          </CardLayout>
        </Content>
      </React.Fragment>
    );
  }
}

export default Dashboard;