import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {BigTabs} from "../components/BigTabs";
import Hero from "../layout/Hero";
import Button from "../components/Button";
import TestGridContent from "../test/TestGridContent";
import MessageBanner from "../components/MessageBanner";
import * as Lorem from "../utils/Lorem";

import RacoonPic from "../../img/profiles/racoon.jpg";
import KoalaPic from "../../img/profiles/kowala.jpg";
import Coin from "../components/Coin";
import MessageBannerGroup from "../components/MessageBannerGroup";

class Team extends React.Component {

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
              <BigTabs.Tab><Link to='/discover'>Discover</Link></BigTabs.Tab>
              <BigTabs.Tab active><Link to='/team'>Team</Link></BigTabs.Tab>
            </BigTabs>
          </Hero.Content>
        </Hero>
        <Content>
          <MessageBannerGroup>
            <MessageBanner>
              <MessageBanner.Icon>
                <Coin image={<img src={RacoonPic}/>} size='m'/>
              </MessageBanner.Icon>
              <MessageBanner.Message>
                <h1>{Lorem.sentence(5, 10)}</h1>
                <p>{Lorem.sentence(10, 30)}</p>
              </MessageBanner.Message>
              <MessageBanner.CTA>
                <Button negative>Deny</Button>
                <Button primary negative>Approve</Button>
              </MessageBanner.CTA>
            </MessageBanner>
            <MessageBanner>
              <MessageBanner.Icon>
                <Coin image={<img src={KoalaPic}/>} size='m'/>
              </MessageBanner.Icon>
              <MessageBanner.Message>
                <h1>{Lorem.sentence(5, 10)}</h1>
                <p>{Lorem.sentence(10, 30)}</p>
              </MessageBanner.Message>
              <MessageBanner.CTA>
                <Button negative>Deny</Button>
                <Button primary negative>Approve</Button>
              </MessageBanner.CTA>
            </MessageBanner>
          </MessageBannerGroup>
          <TestGridContent mode='grid' title="Team Members"
                           badgeCount={0} numPaths={0} numCourses={0}
                           numPeople={10}
                           allowViewChange
                           allowSort={false}/>
          <h3>Team analytics and path progress here ...</h3>
          <p>Coming soon</p>
        </Content>
      </React.Fragment>
    );
  }
}

export default Team;