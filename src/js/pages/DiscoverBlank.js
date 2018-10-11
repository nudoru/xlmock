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
import Message from '../components/Message';

class DiscoverBlank extends React.Component {

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
              <BigTabs.Tab><Link to='/overviewblank'>Overview</Link></BigTabs.Tab>
              <BigTabs.Tab active><Link
                to='/discoverblank'>Discover</Link></BigTabs.Tab>
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
          <Message className='u-margin-bottom-triple'>Visit your <a href=''>Profile</a> to choose a target role and areas of interest. Content that matches your selections will be recommended here.</Message>
        </Content>
      </React.Fragment>
    );
  }
}

export default DiscoverBlank;