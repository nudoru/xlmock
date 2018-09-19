import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {BigTabs} from "../components/BigTabs";
import Hero from "../layout/Hero";
import {GridFit} from "../components/GridFit";
import {Theme} from "../theme/Theme";
import TeamCard from "../components/TeamCard";
import Button from "../components/Button";
import TestGridContent from "../test/TestGridContent";
import MessageBanner from "../components/MessageBanner";


class Team extends React.PureComponent {

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
          <MessageBanner>Important message!</MessageBanner>
          <TestGridContent mode='grid' title="Team Members"
                           badgeCount={0} numPaths={0} numCourses={0} numPeople={10}
                           allowViewChange
                           allowSort={false}/>
        </Content>
      </React.Fragment>
    );
  }
}

export default Team;