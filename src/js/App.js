import React from 'react';
import SiteContainer from "./layout/SiteContainer";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import MessageBanner from "./components/MessageBanner";
import HeroPathProgress from "./components/HeroPathProgress";
import CardLayout from "./layout/CardLayout";
import LearningCard from './components/LearningCard';
import SVGIcon from "./components/SVGIcon";

class App extends React.Component {

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
      <SiteContainer>
        <Header/>
        <Hero>
          <MessageBanner>Important message!</MessageBanner>
          <HeroPathProgress/>
        </Hero>
        <Content>
          <CardLayout title='Layout title' ctaLabel='View More'>
            <LearningCard type='course' duration='42 minutes' mobile>
              <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales enim</h1>
              <p>Aliquam vulputate vestibulum eleifend.</p>
            </LearningCard>
            <LearningCard type='course' duration='42 minutes' mobile>
              <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales enim</h1>
              <p>Aliquam vulputate vestibulum eleifend.</p>
            </LearningCard>
            <LearningCard type='course' duration='42 minutes' mobile>
              <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales enim</h1>
              <p>Aliquam vulputate vestibulum eleifend.</p>
            </LearningCard>
            <LearningCard type='course' duration='42 minutes' mobile>
              <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales enim</h1>
              <p>Aliquam vulputate vestibulum eleifend.</p>
            </LearningCard>
            <LearningCard type='path' duration='42 minutes' mobile>
              <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales enim</h1>
              <p>Aliquam vulputate vestibulum eleifend.</p>
            </LearningCard>
            <LearningCard type='path' duration='42 minutes' mobile>
              <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales enim</h1>
              <p>Aliquam vulputate vestibulum eleifend.</p>
            </LearningCard>
            <LearningCard type='path' duration='42 minutes' mobile>
              <h1>Nulla ut felis vitae mauris lobortis euismod quis sodales enim</h1>
              <p>Aliquam vulputate vestibulum eleifend.</p>
            </LearningCard>
          </CardLayout>
        </Content>
        <Footer/>
      </SiteContainer>
    );
  }
}

export default App;