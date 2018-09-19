import React from 'react';
import {Link} from 'react-router-dom';
import Content from "../layout/Content";
import {BigTabs} from "../components/BigTabs";
import Hero from "../layout/Hero";
import {GridFit} from "../components/GridFit";
import {Theme} from "../theme/Theme";
import TestPersonaCard from "../test/TestPersonaCard";


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
          <h1>Team members</h1>
          <GridFit gap={Theme.scale1} min='250px' max='1fr'>
            <TestPersonaCard/>
            <TestPersonaCard/>
            <TestPersonaCard/>
            <TestPersonaCard/>
            <TestPersonaCard/>
          </GridFit>
        </Content>
      </React.Fragment>
    );
  }
}

export default Team;