import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {BigTabs} from "../components/BigTabs";
import Hero from "../layout/Hero";
import Button from "../components/Button";
import TestGridContent from "../test/TestGridContent";
import HeroCard from "../components/HeroCard";
import * as Lorem from "../utils/Lorem";
import HeroCarousel from "../components/HeroCarousel";

class Discover extends React.Component {

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
          <Hero.Content>
            <BigTabs negative>
              <BigTabs.Tab><Link to='/'>Overview</Link></BigTabs.Tab>
              <BigTabs.Tab active><Link
                to='/discover'>Discover</Link></BigTabs.Tab>
              <BigTabs.Tab><Link to='/team'>Team</Link></BigTabs.Tab>
            </BigTabs>
          </Hero.Content>
          <Hero.OuterContent>
            <HeroCarousel>
              <HeroCarousel.Content>
                <HeroCard type='path' duration='5 hours 30 minutes'
                          tag='Ansible'>
                  <h1>{Lorem.title(5, 10)}</h1>
                  <p>{Lorem.sentence(10, 20)}</p>
                </HeroCard>
                <HeroCard type='course' duration='5 hours 30 minutes'
                          tag='Ansible'>
                  <h1>{Lorem.title(5, 10)}</h1>
                  <p>{Lorem.sentence(10, 20)}</p>
                </HeroCard>
                <HeroCard type='course' duration='5 hours 30 minutes'
                          tag='Ansible'>
                  <h1>{Lorem.title(5, 10)}</h1>
                  <p>{Lorem.sentence(10, 20)}</p>
                </HeroCard>
              </HeroCarousel.Content>
              <HeroCarousel.Indicators>
                <ul>
                  <li>1</li>
                  <li className='is-active'>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </HeroCarousel.Indicators>
            </HeroCarousel>
          </Hero.OuterContent>
        </Hero>
        <Content>
          <TestGridContent mode='list' title="Because you're in North America"
                           badgeCount={0} numPaths={1} numCourses={2}
                           status={<Button>View More</Button>} allowViewChange
                           allowSort={false}/>
          <TestGridContent mode='list'
                           title="Because you're a Solutions Architect"
                           badgeCount={0} numPaths={0} numCourses={3}
                           status={<Button>View More</Button>} allowViewChange
                           allowSort={false}/>
          <TestGridContent mode='list'
                           title="Because you're interested in Ansible"
                           badgeCount={0} numPaths={2} numCourses={1}
                           status={<Button>View More</Button>} allowViewChange
                           allowSort={false}/>
          <TestGridContent mode='list'
                           title="Because you're interested in OpenShift"
                           badgeCount={0} numPaths={3} numCourses={0}
                           status={<Button>View More</Button>} allowViewChange
                           allowSort={false}/>
        </Content>
      </React.Fragment>
    );
  }
}

export default Discover;