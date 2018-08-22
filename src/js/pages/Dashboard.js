import React from 'react';
import Hero from "../layout/Hero";
import Content from "../layout/Content";
import MessageBanner from "../components/MessageBanner";
import HeroPathProgress from "../components/HeroPathProgress";
import CardLayout from "../layout/CardLayout";
import LearningCard from '../components/LearningCard';
import DashboardNav from "../components/DashboardNav";

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
          <DashboardNav/>
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